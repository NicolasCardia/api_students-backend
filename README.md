# API Students Backend

Esta é uma API desenvolvida para gerenciar os estudantes de uma escola. Ela oferece um conjunto de rotas para realizar operações CRUD (Criar, Ler, Atualizar, Excluir) sobre os estudantes. O banco de dados utilizado é o SQLite.

## Funcionalidades

A API permite realizar as seguintes operações:

- **Criar**: Adicionar um novo estudante.
- **Ler**: Obter todos os estudantes cadastrados.
- **Atualizar**: Modificar os dados de um estudante existente.
- **Excluir**: Remover um estudante do banco de dados.

## Endpoints

A API possui os seguintes endpoints:

### 1. `GET /students/all`
Obtém todos os estudantes cadastrados.

**Resposta**:
- Código HTTP: `200 OK`
- Corpo da resposta: Lista de estudantes.

### 2. `POST /students/create`
Cria um novo estudante.

**Parâmetros**:
- `name`: Nome do estudante.
- `age`: Idade do estudante.
- `grade`: Série do estudante.

**Resposta**:
- Código HTTP: `201 Created`
- Corpo da resposta: Detalhes do estudante criado.

### 3. `DELETE /students/delete/:studentId`
Exclui um estudante pelo seu ID.

**Parâmetros**:
- `studentId`: ID do estudante a ser excluído.

**Resposta**:
- Código HTTP: `200 OK`
- Corpo da resposta: Mensagem de sucesso ou erro.

### 4. `PUT /students/update/:studentId`
Atualiza os dados de um estudante pelo seu ID.

**Parâmetros**:
- `studentId`: ID do estudante a ser atualizado.
- `name` (opcional): Novo nome do estudante.
- `age` (opcional): Nova idade do estudante.
- `grade` (opcional): Nova série do estudante.

**Resposta**:
- Código HTTP: `200 OK`
- Corpo da resposta: Estudante atualizado ou mensagem de erro.

## Instalação

Para rodar a API localmente, siga os passos abaixo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/NicolasCardia/api_students-backend.git
    cd api_students-backend
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    npm start
    ```

O servidor estará disponível em `http://localhost:8080`.

## Banco de Dados

A API utiliza o **SQLite** como banco de dados. O arquivo do banco de dados será gerado automaticamente ao iniciar o servidor. Ele ficará armazenado no diretório do projeto.

## Contribuição

Sinta-se à vontade para abrir um pull request ou um issue caso tenha melhorias ou sugestões para o projeto.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
