require("dotenv").config()
require('./config/db');
const express = require('express')
const app = express()
const cors = require('cors');
const { sequlize } = require("./config/db");


app.use(cors());
app.use(express.json());

// create server
app.listen(process.env.PORT, () => {
    console.log("Server is running !!");
})

// for sync table
sequlize.sync().then(() => console.log("sync")).catch((error) => console.log(error))
