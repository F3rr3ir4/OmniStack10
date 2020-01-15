/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : SearchController.js
 *******************************************/
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseSringAsArray");

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: { $in: techsArray },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return response.json({ devs });
    }
};
