<h1 align="center">
    TodoApp
</h1>

<h3 align="center">Efficient organization and management of tasks, allowing users to perform CRUD operations on both to-do items and categories.</h3>

<h4 align="center"> 
	🚧  Concluded  🚧
</h4>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#-demo">Demo</a> •
 <a href="#-how-to-run">How to run</a> •
 <a href="#-tech-stack">Tech stack</a> •
 <a href="#-author">Author</a>
</p>

<h4 align="center">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
 </h4>



## 🔖 About 

The project began with designing the user interface from scratch using Figma. On the frontend, React was employed with TypeScript for type checking, and Styled Components were utilized for styling, creating a visually appealing and responsive user interface. The backend, developed with C# and Entity Framework, followed Domain-Driven Design principles to establish a structured architecture. PostgreSQL served as the database, supporting functionalities such as task creation, organization by category and due date, and a powerful search feature for locating specific tasks efficiently. The combined efforts in frontend and backend technologies resulted in a cohesive and user-friendly task management application.


## 💻 Demo

https://github.com/lfalcaolopes/TodoApp/assets/61370784/51ba6ec2-5ab6-49e1-a379-c4dc33834d1f

<h3 align="center">
    <a href="https://www.figma.com/file/ZDdFHL6mx4cf3wSvLAyeXa/TodoApp?type=design&node-id=4%3A211&mode=design&t=IDk1rKIjlKBDJFRu-1">Figma design</a>
</h3 >
<h3 align="center">
    <a href="https://todo-app-zeta-lake.vercel.app/">Access demo</a>
</h3 >

<p align="center">
    ⚠️WARNING⚠️
</p >
<p align="center">
    Please be advised that the initial loading time of this application may be longer than expected due to platform limitations associated with hosting the backend. When fully loaded the application will refresh automatically.
</p >

## ℹ How to run

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


## 🚀 Tech Stack 

The project was developed using the following technologies

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Radix](https://www.radix-ui.com/)
- [Zod](https://zod.dev/)
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Entity Framework](https://learn.microsoft.com/en-us/ef/)
- [PostgreSQL](https://www.postgresql.org/)



## 📌 Ideas to implement 

- [ ] Authentication system


## 🦸 Author 

<a href="https://www.linkedin.com/in/lfalcaolopes/">
 <img src="https://user-images.githubusercontent.com/61370784/222877359-3b5bb1e2-2db1-4def-9a6b-d94ca5dece1e.png" width="100px;" alt=""/>
</a><br>

Developed by Lucas Falcão👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Lucas_Falcão-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lfalcaolopes/)](https://www.linkedin.com/in/lfalcaolopes/) 
[![Gmail Badge](https://img.shields.io/badge/-lfalcaolopes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lfalcaolopes@gmail.com)](mailto:lfalcaolopes@gmail.com)
