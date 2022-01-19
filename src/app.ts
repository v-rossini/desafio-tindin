import "reflect-metadata"
import express from 'express';
import './database';
import cors from 'cors';
import  './shared/container';
import 'dotenv';
import { classesRouter } from "./routes/classesRouter";


const app = express();

app.use(cors());
app.use(express.json())
app.use("/classes", 
(req, res, next)=>{console.log("chegou0"); 
next()},/*authentication,*/ classesRouter);


export {app}