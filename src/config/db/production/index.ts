import { DataSource } from "typeorm";

const prodDb = new DataSource({
  type: "mysql",
  database: "e-commerce-app",
  username: "root",
  password: "",
  port: 3306,
  entities: [__dirname, "./build/models/*.js"],
  synchronize: true,
  logging: false,
});

export const initProdDb = async () => {
  await prodDb
    .initialize()
    .then(() => {
      console.log(`connected`);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
