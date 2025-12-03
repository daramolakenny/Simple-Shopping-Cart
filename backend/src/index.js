import express from "express";
import router from "./route/userRouter.js";
import dotenv from "dotenv";
import { connectionDb } from "./db/productdb.js";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
connectionDb();

app.use("/api", router);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}.`);
});