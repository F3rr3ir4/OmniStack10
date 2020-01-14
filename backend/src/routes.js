/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : routes.js
 *******************************************/
const { Router } = require("express");

const routes = Router();

routes.post("/users", (request, Response) => {
    Console.log(request.body);
    return Response.json({ message: "Hello Ferreira" });
});

module.exports = routes;
