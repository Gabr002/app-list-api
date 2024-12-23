const express = require("express");
const controllerPessoa = require("../controller/pessoa");

const routers = express.Router();
const controller = new controllerPessoa; 

routers.get('/api/v1/nomes', controller.PegarTodos);
routers.get('/api/v1/nome/:id', controller.PegarUm);
routers.post("/api/v1/nome", controller.Adicionar);
routers.put("/api/v1/nome/:id", controller.Alterar);
routers.delete("/api/v1/nome/:id", controller.Deletar)


module.exports = routers;