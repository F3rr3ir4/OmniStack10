/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : routes.js
 *******************************************/
const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
