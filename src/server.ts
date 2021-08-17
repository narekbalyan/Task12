import Express from "express";
import dotenv from "dotenv";
import readFilerouter from "./routers/readFilerouter";
import usersRouter from "./routers/usersRouter";
import fileConverterRouter from "./routers/fileConverterRouter"

dotenv.config();

const app = Express();

app.use("/", readFilerouter);

app.use("/", fileConverterRouter);

app.use("/", usersRouter)

app.listen(3000); 