# MICROSSERVIÇO DE PESSOAS

# Pré-requisitos
- versão do node 14.16.1
- executar o script sql -> desafio-first\script.sql
- criar o arquivo .env de acordo com as suas configurações do banco de dados na raiz do projeto

# Como executar o projeto
- npm install 
- npm run start

# Rotas mapedas para teste
GET localhost:3000/pessoas
GET localhost:3000/pessoas/{ID}
POST localhost:3000/pessoas
PUT localhost:3000/pessoas
DELETE localhost:3000/pessoas/{ID}

# Como executar os teste unitário
- npm test

# Como faria autenticação / Autorização
 - Para isso iria expor uma API POST com  authenticate. Ao passar o nome de usuário e a senha corretos, ele gerará um JSON Web Token (JWT). Validaria o JWT: Se um usuário tentar acessar a API GET com o /pessoas por exemplo, ele permitirá o acesso somente se uma solicitação tiver um JSON Web Token (JWT) válido, caso não o usuário não teria acesso ao serviço.

 # Documentação
 - Para isso utilizaria o swagger, ferramenta aque nos permite mapear todo o endpoint, request, response, errors e models

 # Segurança
 - Para evitar injeção sql, poderia ser evitado usar sql puro com concatenação, e também o uso de alguma ORM protege a base desses ataques, como sequelize, typeorm, prisma. 

 # Como você implementaria um tratamento de erro apropriado
 - Para isso seria viável criar middleware no qual eu mapearia determinados erros e quando na execução do código cair em uma exceção direcionar para esse middleware tratar.
