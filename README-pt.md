<h1 align="center">
    TodoApp
</h1>

<h3 align="center">Organização e gerenciamento eficiente de tarefas, permitindo aos usuários realizar operações CRUD em itens de tarefas e categorias.</h3>

<h4 align="center"> 
	🚧  Concluido  🚧
</h4>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-demonstração">Demonstração</a> •
 <a href="#-como-rodar">Como rodar</a> • 
 <a href="#-tecnologias-utilizadas">Tecnologias</a> • 
 <a href="#-autor">Autor</a>
</p>

<h4 align="center">
    <a href="README.md">Inglês</a>
    ·
    <a href="README-pt.md">Português</a>
</h4>



## 🔖 Sobre

O projeto começou com o design da interface do usuário do zero usando Figma. No frontend, React foi empregado com TypeScript para verificação de tipo, e Styled Components foram utilizados para estilização, criando uma interface de usuário visualmente atraente e responsiva. O backend, desenvolvido em C# e Entity Framework, seguiu os princípios do Domain-Driven Design para estabelecer uma arquitetura estruturada. O PostgreSQL serviu como banco de dados, suportando funcionalidades como criação de tarefas, organização por categoria e data de vencimento, além de um poderoso recurso de pesquisa para localizar tarefas específicas de forma eficiente. Os esforços combinados em tecnologias frontend e backend resultaram em um aplicativo de gerenciamento de tarefas coeso e fácil de usar.


## 💻 Demonstração

https://github.com/lfalcaolopes/TodoApp/assets/61370784/51ba6ec2-5ab6-49e1-a379-c4dc33834d1f

<h3 align="center">
    <a href="https://todo-app-zeta-lake.vercel.app/">Acessar a demonstração</a>
</h3 >
<h3 align="center">
    <a href="https://www.figma.com/file/ZDdFHL6mx4cf3wSvLAyeXa/TodoApp?type=design&node-id=4%3A211&mode=design&t=IDk1rKIjlKBDJFRu-1">Figma design</a>
</h3 >

## ℹ Como rodar

```sh
# Clone this repository
$ git clone git@github.com:lfalcaolopes/TodoApp

## Frontend

# Access the project folder in your terminal/cmd
$ cd TodoApp/frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

##Backend

# Access the project folder in your terminal/cmd
$ cd ../backend

# Install the dependencies
$ dotnet restore

# Generate database
$ dotnet ef database update

# Run the application
$ cd TodoApp.API
$ dotnet run

# The application will open on the door:5173- access http://127.0.0.1:5173
```

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Radix](https://www.radix-ui.com/)
- [Zod](https://zod.dev/)
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Entity Framework](https://learn.microsoft.com/en-us/ef/)
- [PostgreSQL](https://www.postgresql.org/)

## 🦸 Autor

<a href="https://www.linkedin.com/in/lfalcaolopes/">
 <img src="https://user-images.githubusercontent.com/61370784/222877359-3b5bb1e2-2db1-4def-9a6b-d94ca5dece1e.png" width="100px;" alt=""/>
</a><br>

Desenvolvido por Lucas Falcão👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Lucas_Falcão-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lfalcaolopes/)](https://www.linkedin.com/in/lfalcaolopes/) 
[![Gmail Badge](https://img.shields.io/badge/-lfalcaolopes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lfalcaolopes@gmail.com)](mailto:lfalcaolopes@gmail.com)
