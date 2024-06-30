const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express();

app.use(cors());

mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req, res) => {
    res.json("Hello from server.js from backend")
})

app.listen(8081, () => {
    console.log("Listening To 8081");
})