## 🛒 Projeto CARRINHO DE COMPRAS

Esta aplicação simula o fluxo de um carrinho de compras, permitindo:

- Adicionar produtos aos carrinho
- Remover produtos do carrinho
- Visualizar a quantidade de produtos adicionados no carrinho.
- Visualizar a soma dos preços dos produtos no carrinho.

## 🛠️ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação.
- [ReactJS](https://react.dev/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [ViteJS](https://vitejs.dev/) - Ferramenta de construção de aplicações com servidor de desenvolvimento integrado.
- [Redux](https://redux.js.org/) - Biblioteca de gerenciamento de estado para controle global do estado da aplicação.
- [React Router DOM](https://reactrouter.com/) - Biblioteca para roteamento em aplicações React.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Linguagem de estilização para desenvolvimento web.
- [Docker](https://docs.docker.com/) - Plataforma de software para automação de implantação e execução de aplicativos em ambientes isolados chamados containers..

  #### 🔍 Recursos Visuais

  - [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones para React.
  - [Material-UI](https://material-ui.com/) - Biblioteca de componentes React para um design visual consistente.
  - [SVG Repo](https://www.svgrepo.com/) - Recurso para encontrar ícones SVG gratuitos.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone ...
```

Para iniciá-lo, siga os passos abaixo:

# Windows

#### 💻 Executar com npm

```bash
# Instalando dependências do projeto
$ npm install

# Rodar o projeto
$ npm run dev
```

#### 🐳 Executar com Docker

```bash
# Construa a imagem Docker:
$ docker build -t carrinhocomprasfrontend:latest .

# Execute o contêiner Docker:
$ docker run -p 3000:3000 carrinhocomprasfrontend
```

- ###### A aplicação estará acessível em http://localhost:3000.
