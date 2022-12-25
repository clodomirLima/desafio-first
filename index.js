const ApiController = require("./api/localApi/controller/apiController");
const Database = require("./api/localApi/database/conectDB");
const apiController = new ApiController();

const handler = async (event) => {
    const db = new Database();
    db.init()
    try {
        console.log("event", event);

        const body = event.body ? JSON.parse(event.body) : null;
        const headerParams = event.headers;
        const xAction = headerParams['x-action'];
        const id = event.queryStringParameters ? event.queryStringParameters.id : null;
        console.log('xAction', xAction);
        let result;
        switch (xAction) {
            case 'listar-funcionario':
                result = await apiController.findAllFuncionario();
                break;
            case 'consulta-funcionario-por-id':
                result = await apiController.findAOneFuncionario(id);
                break;
            case 'alterar-funcionario':
                result = await apiController.updateFuncionario(body);
                break;
            case 'deletar-funcionario':
                result = await apiController.deleteFuncionario(id);
                break;
            default:
                result = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': '*',
                    },
                    statusCode: 400,
                    body: JSON.stringify(
                        'parâmetro x-action (obrigatório) não reconhecido ',
                    ),
                };
                break;
        }

        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            },
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.log('error handler', error);
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            },
            body: JSON.stringify({ mensagem: error.message }),
        };
    } finally {
        console.log("@handle: finalizando o lambda");
        db.close();
    }
};

module.exports.handler = handler;
