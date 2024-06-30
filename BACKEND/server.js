const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    databse: "crud01",
})

app.get("/", (req, res) => {
    const sqlQueryString= "SELECT * from student";
    db.query(sqlQueryString, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
    res.json("Hello from backend");
})

app.listen(8081, () => {
    console.log("listening to 8081");
    // run command "node server.js" to start the server
})
