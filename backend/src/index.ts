import express from "express";
import cors from "cors";
import { DatabaseConnection } from "./database";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

DatabaseConnection.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    }).catch((err) => {
        console.log(err);
        throw Error(err);
    });

