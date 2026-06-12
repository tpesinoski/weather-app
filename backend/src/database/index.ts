import { DataSource } from "typeorm";
import * as entities from "@database/entities";

export const DatabaseConnection = new DataSource({
    type: "postgres",
    database: "postgres",
    username: "postgres",
    password: "root",
    host: "localhost",
    port: 54321,
    synchronize: true,
    logging: false,
    entities: Object.values(entities)
});
