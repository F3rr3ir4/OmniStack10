/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : parseSringAsArray.js
 *******************************************/
module.exports = function parseSringAsArray(arrayAsString) {
    return arrayAsString.split(",").map(tech => tech.trim());
};
