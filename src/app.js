import express from "express";
import morgan from "morgan";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan())
app.use(cookieParser())



export default app;
