import socketio from "socket.io-client";

const socket = socketio(`http://172.21.19.5:3333`, {
    autoConnect: false
});
function subscribeToNewDevs(subscribeFunction) {
    socket.on("new-dev", subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };
    socket.connect();
    yarn;
}
function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export { connect, disconnect, subscribeToNewDevs };
