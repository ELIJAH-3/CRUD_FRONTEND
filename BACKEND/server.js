const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud01",
})

let logger = true;
const currentTime = new Date().toLocaleString();


app.get("/", (req, res) => {
    const sqlQueryString = "SELECT * from student order by NAME desc";
    db.query(sqlQueryString, (err, data) => {
        if (err) return res.json(err);
        if (logger) {
            console.log(`[${currentTime}] Query:`, sqlQueryString);
            data.forEach(elements => {
                console.log(`[${currentTime}] Result:`, elements);
            });
        }
        return res.json(data); // sends Response
    })
    // res.json("Hello from backend");
})

app.post('/createNewStudent', (req, res) => {
    console.log("Entered Create New Student with name=" + req.body.name + ", email=" + req.body.email);
    const sqlQueryString = "INSERT INTO student (`NAME`, `EMAIL`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sqlQueryString, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
    // res.json("Hello from backend");
})

app.post('/runsqlquery', (req, res) => {
    console.log("Runsqlquery.js" + ", queryString=" + req.body.queryString);
    const sqlQueryString = req.body.queryString;

    db.query(sqlQueryString, (err, data) => {
        if (err) return res.json(err);
        if (logger) {
            console.log(`[${currentTime}] Query:`, sqlQueryString);
            data.forEach(elements => {
                console.log(`[${currentTime}] Result:`, elements);
            });
        }
        return res.json(data); // sends Response
    })

    // res.json("Hello from backend");
})

app.listen(8081, () => {
    console.log("listening to 8081");
    // run command "node server.js" to start the server
})
