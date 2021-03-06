/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : DevController.js
 *******************************************/
const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseSringAsArray");
const { findConnections, sendMessage } = require("../websocket");
module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (dev) {
            return response.status(400).json({ message: "Dev already exists" });
        }

        const apiResponse = await axios.get(
            `https://api.github.com/users/${github_username}`
        );

        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: "Point",
            coordinates: [longitude, latitude]
        };

        console.log(name, avatar_url, bio, github_username, techsArray);

        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });
        //filtra as conexões que estão há no máximo 10km de distancia
        //e que o novo dev tenha pelo menos uma das tecnologias escolhidas

        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray
        );

        sendMessage(sendSocketMessageTo, "new-dev", dev);

        return response.json(dev);
    },

    async update() {
        // atualizar name, techs, avatar_url, bio
    },

    async destroy() {
        // deletar dev do banco de dados
    }
};
