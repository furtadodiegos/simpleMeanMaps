/**
 * Dependencies
 */
const { app } = require("../index");
const http = require("http");

const PORT = process.env.PORT || 5000;

/*** Start HTTP server.*/
const server = http.createServer(app);

/*** Listen on provided port.*/
server.listen(PORT, () => console.log(`Api running on port: ${PORT}`));
