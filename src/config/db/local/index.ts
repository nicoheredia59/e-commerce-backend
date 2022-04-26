import { DataSource } from "typeorm";

const localDb = new DataSource({
  type: "mysql",
  database: "e-commerce-app",
  username: "root",
  password: "",
  port: 3306,
  entities: [__dirname, "./src/models/*.*"],
  synchronize: true,
  logging: false,
});

export const initLocalDb = async () => {
  await localDb
    .initialize()
    .then(() => {
      console.log(`local databse connected`);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
