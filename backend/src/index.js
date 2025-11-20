import express from "express";
import router from "./route/userRouter.js";
import dotenv from "dotenv";
import { connectionDb } from "./db/productdb.js";

dotenv.config();


const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
connectionDb();

app.use("/api", router);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}.`);
});