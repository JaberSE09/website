import { Client, Environment, ApiError } from "square";
import "dotenv"
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});

export default client
