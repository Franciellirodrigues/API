const express = require("express"); /*Importou o express*/ 

const app = express(); /*Inicializou o express*/ 
app.use(express.json());

/*Rout Params
app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params;

  response.send(`
  Mensagem ID: ${id}.
  Nome do usuário: ${user}.
  `);
});*/

/*Query Params*/
app.post("/user", (request, response) => {
  const { name, email, password } = request.body;

  response.json({ name, email, password });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));