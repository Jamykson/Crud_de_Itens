# 📦 Protótipo de Gerenciador de Estoque | Desafio Trainee

![Status](https://img.shields.io/badge/status-concluído-green)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📖 Descrição do Projeto

Este projeto é um protótipo de frontend para um **Sistema de Gerenciamento de Estoque**, desenvolvido como parte do desafio do programa de trainees da Include Engenharia. A aplicação é focada na interface do usuário (UI) и na experiência de navegação (UX), demonstrando todas as funcionalidades de um sistema CRUD sem a necessidade de um backend.

Toda a manipulação de dados é simulada localmente no navegador, permitindo a demonstração completa dos fluxos de cadastro, login, controle de itens e visualização de histórico.

## ✨ Funcionalidades

-   **Simulação de Autenticação:** Telas de Login e Cadastro que permitem o acesso à aplicação.
-   **Dashboard Principal:** Painel com visão geral e acesso rápido às principais funcionalidades.
-   **Controle de Estoque (CRUD):**
    -   Adicionar novos produtos ao inventário.
    -   Visualizar todos os itens cadastrados com sistema de busca.
    -   Atualizar e excluir itens do estoque.
-   **Registro de Movimentação:** Formulário para registrar entradas e saídas de produtos.
-   **Histórico de Movimentos:** Tela para visualizar um log de todas as operações realizadas.

## 🖼️ Telas da Aplicação

<p align="center">
  <em>(Substitua as URLs abaixo pelos links das suas imagens no repositório)</em>
</p>
<p align="center">
  <img src="URL_DA_SUA_IMAGEM_DE_LOGIN_AQUI" width="48%" />
  <img src="URL_DA_SUA_IMAGEM_DE_CADASTRO_AQUI" width="48%" />
  <em>Telas de Login e Cadastro</em>
</p>
<p align="center">
  <img src="URL_DA_SUA_IMAGEM_DO_PAINEL_AQUI" width="70%" />
  <em>Painel Principal</em>
</p>
<p align="center">
  <img src="URL_DA_SUA_IMAGEM_DE_ESTOQUE_AQUI" width="70%" />
  <em>Tela de Estoque com busca</em>
</p>
<p align="center">
  <img src="URL_DA_SUA_IMAGEM_DE_MOVIMENTACAO_AQUI" width="70%" />
  <em>Formulário de Movimentação de Itens</em>
</p>

> **Nota:** Para que as imagens apareçam, você precisa subí-las para o seu repositório (por exemplo, em uma pasta `assets` ou `docs`) e substituir `URL_DA_SUA_IMAGEM_AQUI` pelo link da imagem.

## 🛠️ Tecnologias Utilizadas

-   **ReactJS**: Biblioteca JavaScript para a construção de toda a interface.
-   **React Router DOM**: Para criar as rotas e a navegação entre as páginas.
-   **useState / useContext**: Hooks do React para gerenciar o estado e simular os dados localmente.
-   **Tailwind CSS** (ou CSS puro): Para a estilização visual dos componentes.
-   **Vite**: Ferramenta de build para um desenvolvimento rápido e otimizado.

## 🚀 Como Executar o Projeto

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/)
-   Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Execução

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

# Navegue até a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm run dev