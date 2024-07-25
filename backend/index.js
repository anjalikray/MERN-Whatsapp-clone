import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./db/db.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

const PORT = process.env.PORT || 8000;
Connection();

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
