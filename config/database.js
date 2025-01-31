import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log("Connecting to SQL")
const postgresClient = new pg.Pool();
console.log("Opened pool to sql")
var client = await postgresClient.connect();
console.log(client);

export default postgresClient;
