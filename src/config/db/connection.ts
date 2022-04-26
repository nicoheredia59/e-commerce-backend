import dotenv from "dotenv";
import { initLocalDb } from "./local";
import { initProdDb } from "./production";
dotenv.config();

const { NODE_ENV } = process.env;

const connection = async () => {
  NODE_ENV === "development" ? await initLocalDb() : await initProdDb();
};

export default connection;
