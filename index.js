import dotenv from "dotenv";
import Server from "./src/models/Server.js";

dotenv.config()
const server = new Server();

server.listen()