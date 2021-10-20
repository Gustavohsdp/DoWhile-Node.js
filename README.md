<h1 align="center">NLW Heat - Node.js</h1>

<p align="center">
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=NLW&message=Heat&color=8257E5&labelColor=000000" alt="NLW Heat" />
</p>

## ✨ Technologies

This project was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

## 🚀 Getting started

> Obs.: In this project we have authentication via OAuth com o GitHub

- Clone the repository and access the folder;
- Make a copy of the file `.env.example` for `.env` and fill in your credentials from GitHub;
- Install dependencies with `yarn`;
- Run migrations with `yarn prisma migrate dev`;
- Start the server with `yarn dev`;

The application can be accessed at [`localhost:3333`](http://localhost:3333).

## 🚀 Routes

- AuthenticateUser POST - localhost:3333/authenticate
- UserProfile GET - localhost:3333/profile
- CreateMessage POST - localhost:3333/messages
- Get3LastMessage GET - localhost:3333/messages/last3

## 📄 License

This project is under license MIT.
See the file [LICENSE](LICENSE) for more details.

---

Feito com ♥ by Gustavo Henrique 👋🏻 &nbsp;
