/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 21 2020
 *  File : websocket.js
 *******************************************/

const socketio = require("socket.io");
const parseSringAsArray = require("./utils/parseSringAsArray");
const calculateDistance = require("./utils/calculateDistance");
const {findConnections } =require ('./websocket');

let io;
const connection = [];

exports.setupWebsocket = server => {
    const io = socketio(server);

    io.on("connection", socket => {
        const { latitude, longitude, techs } = socket.handshake.query;

        connection.push({
            id: socket.id,
            coordinades: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseSringAsArray(techs)
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connection.filter(connection => {
        return;
        calculateDistance(coordinates, connection.coordinates) < 10 &&
            connection.techs.some(item => techs.includes(item));
    });
};
export.sendMessage = (to, message, data)=> {
    to.forEach(connection=>{
        io.to(connection.id).emit(message,data)
    })
}