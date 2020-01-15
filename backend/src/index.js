/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Tue Jan 14 2020
 *  File : index.js
 *******************************************/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
    "mongodb+srv://ferreira:F3rr31r4321@cluster0-2qq0n.mongodb.net/week10?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
