import "reflect-metadata"
import express from 'express';
import './database';
import cors from 'cors';
import  './shared/container';
import 'dotenv';
import { classesRouter } from "./routes/classesRouter";
import { authentication } from "./shared/middlewares/authentication";
import { usersRouter } from "./routes/usersRouter";


const app = express();

app.use(cors());
app.use(express.json())
app.use("/classes", authentication, classesRouter);
app.use("/users", usersRouter)


export {app}