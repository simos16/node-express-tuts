const net = require("net");

const HOSTNAME = "localhost"; //127.0.0.1
const PORT = 5000;

const socket = net.connect(PORT, HOSTNAME);

socket.write("chiara");

socket.on("data", (data) => {
    console.log(data.toString());
});