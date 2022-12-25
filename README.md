# projeto node 
# installation
npm install

# teste
npm test
# Para acessar o endpoint que lista funcionario:
URL: 
curl --location --request GET 'https://sjqdnjyee6ajdqgu2emeyksrfe0fotkz.lambda-url.us-east-1.on.aws/' \
--header 'x-action: listar-funcionario'

# Para acessar o endpoint que consulta determinado funcionario por ID: 
curl --location --request GET 'https://sjqdnjyee6ajdqgu2emeyksrfe0fotkz.lambda-url.us-east-1.on.aws/?id=3' \
--header 'x-action: consulta-funcionario-por-id'

# Para acessar o endpoint que altera dados do funcionario: 
curl --location --request PUT 'https://sjqdnjyee6ajdqgu2emeyksrfe0fotkz.lambda-url.us-east-1.on.aws/' \
--header 'x-action: alterar-funcionario' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 3,
    "idade": 22,
    "nome": "Flavio Dino",
    "cargo": "Auditor Federal"
}'

# Para acessar o endpoint que deleta o funcionario da base dados: 
curl --location --request DELETE 'https://sjqdnjyee6ajdqgu2emeyksrfe0fotkz.lambda-url.us-east-1.on.aws/?id=3' \
--header 'x-action: deletar-funcionario' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 3,
    "idade": 22,
    "nome": "Flavio Dino",
    "cargo": "Auditor Federal"
}'