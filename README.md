# Projeto

## Requisitos
- MySql instalado (ou Docker com imagem do MySql);
- SGBD para acessar o banco (ex: MySQL Workbench, Dbeaver, ...);
- Node instalado;

## Preparando o banco de dados
1. Execute o MySQL na sua máquina;
2. Utilizando o SGBD da sua escolha, importe o arquivo encontrado na pasta `/setup-mysql/script.sql`;
    - No MySQL Workbench seria indo em `File > Open SQL Script`;

## Executando localmente

### Backend

#### Pontos de atenção
> **Ponto de atenção 1**  
> Verificar se no trecho `var db = mysql.createConnection({...})` encontrado no arquivo `/app.js` as configurações correspondem ao seu MySql que está rodando localmente.

> **Ponto de atenção 2**  
> Por problemas de compatibilidade da versão tradicional do mysql com Docker, foi utilizado o seguinte pacote no arquivo `/app.js`: `var mysql = require('mysql2');`. É pra funcionar normalmente em qualquer caso, mas em casos de problema rodando localmente, altere para `var mysql = require('mysql');`.

#### Passo a passo
Abra a pasta `/backend/` na sua linha de comando e execute o seguinte comando:
```
npm i
```
Isso erá executar a instalação dos pacotes. Após a realização desse processo, execute:
```
npm run start
```

### Frontend
Abra a pasta `/frontend/` na sua linha de comando e execute o seguinte comando:
```
npm i
```
Isso erá executar a instalação dos pacotes. Após a realização desse processo, execute:
```
npm run start
```

> A execução do projeto termina aqui. Os passos seguintes abordam outros temas, como a execução em Docker.

# Outros
## Rodando o MySql no Docker
### Comandos Úteis
Obs.: devem ser usados no diretório em que está o docker-compose.yml
``` yml
# Para rodar as aplicações em docker
docker-compose up -d
```

# Setup do MySql no Docker
**Obs.:** Só precisa fazer da primeira vez que vai usar. Nas próximas é só abrir o Docker Desktop.

1. Instale o Docker Desktop

2. Execute os 2 comandos a seguir no CMD
```
# Baixar imagem
docker pull mysql

# Criar container
docker run --name pucpr -e MYSQL_ROOT_PASSWORD=pwd-pucpr -p 3306:3306 -d mysql:latest
```

3. Para acessar pelo dbeaver, foi necessário modificar na coenxão o seguinte item:
allowPublicKeyRetrieval=true

4. Entrar no docker e criar banco
```
## Para executar no MySql
CREATE DATABASE ec_inov_colab;
```