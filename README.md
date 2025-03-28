# ProdutosWeb (Frontend)

Esta é uma aplicação frontend desenvolvida em **Angular**, que fornece funcionalidades para a criação e autenticação de usuários, bem como a manipulação de um conjunto de produtos, categorias e fornecedores através de operações CRUD (Criar, Ler, Atualizar e Excluir). O frontend se comunica com uma API backend que gerencia os dados dos usuários e produtos.

## Funcionalidades

- **Autenticação de Usuários**: Permite aos usuários se registrar, realizar login e logout.
- **Gestão de Produtos**: Permite a criação, leitura, atualização e exclusão de produtos.
- **Interface Responsiva**: A aplicação foi desenvolvida para ser responsiva, garantindo uma boa experiência em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Frontend**: Angular 15+
- **Autenticação**: JSON Web Tokens (JWT)
- **Gerenciamento de Estado**: NgRx (opcional)
- **CSS**: SCSS para estilização
- **Comunicação com API**: HTTPClient do Angular
- **Roteamento**: Angular Router

## Instalação

### Requisitos

- Node.js (recomendado versão 16.x ou superior)
- Angular CLI (se não tiver instalado, pode instalar com o comando: `npm install -g @angular/cli`)

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/pauloflau/ProdutosWeb.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd ProdutosWeb
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Execute a aplicação:

    ```bash
    ng serve
    ```

    A aplicação será iniciada no endereço [http://localhost:4200](http://localhost:4200).

## Como Usar

### 1. Cadastro de Usuário

- Acesse a tela de **Cadastro** clicando no link "Criar Conta de Usuario" na página inicial.
- Preencha os campos obrigatórios (Nome, Email, Senha) e clique em "Cadastrar".
- Após o cadastro, o usuário será redirecionado para a tela de login.

### 2. Login de Usuário

- Na tela inicial, insira o **email** e a **senha**.
- Clique em "Entrar no sistema" para acessar a aplicação.

### 3. Gestão de Produtos

- Após o login, o usuário será redirecionado para a parte de **Produtos**.
- Na tela de produtos, você pode:
  - **Criar** novos produtos clicando no botão "Cadastrar Produto".
  - **Editar** um produto clicando no ícone de edição ao lado do produto.
  - **Excluir** um produto clicando no ícone de lixeira.
  - **Visualizar** os detalhes de um produto clicando no nome do produto.

## API Backend

Esta aplicação frontend se comunica com uma API backend para realizar as operações de cadastro, login e gestão de produtos. Certifique-se de que a API esteja configurada corretamente e em funcionamento.

- Endpoints de Autenticação:
    - **POST** `/api/usuarios/criar` - Para registrar um novo usuário.
    - **POST** `/api/usuarios/autenticar` - Para realizar login e obter um JWT.
- Endpoints de Produtos:
    - **GET** `/api/produtos` - Para listar todos os produtos.
    - **GET** `/api/produtos/{idProduto}` - Para listar um produto.
    - **POST** `/api/produtos` - Para criar um novo produto.
    - **PUT** `/api/produtos` - Para atualizar um produto existente.
    - **DELETE** `/api/produtos/{idProduto}` - Para excluir um produto.
- Endpoints de Fornecedores:
    - **GET** `/api/fornecedores` - Para listar todos os fornecedores.
- Endpoints de categorias:
    - **GET** `/api/categorias` - Para listar todos os categorias.

## Contribuindo

Se você quiser contribuir para este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça as alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

