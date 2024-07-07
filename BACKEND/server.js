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
    const sqlQueryString = "SELECT * from student order by id desc";
    db.query(sqlQueryString, (err, data) => {
        if (err) return res.json(err);
        if (logger) {
            console.log(`[${currentTime}] server.js Query:`, sqlQueryString);
            data.forEach(elements => {
                console.log(`[${currentTime}] server.js Result:`, elements);
            });
            console.log();
        }
        return res.json(data); // sends Response
    })
    // res.json("Hello from backend");
})

app.post('/createNewStudent', (req, res) => {
    console.log(`[${currentTime}] server.js Entered Create New Student with name=` + req.body.name + ", email=" + req.body.email);
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
    console.log(`[${currentTime}] server.js ` + ", queryString=" + req.body.queryString);
    const sqlQueryString = req.body.queryString;

    db.query(sqlQueryString, (err, data) => {
        if (err) {
            console.log(`[${currentTime}] server.js error while executing query: `, req.body.queryString);
            console.log(`[${currentTime}] server.js ERROR: `, err.message);
            return res.json(err)
        };

        if (logger) {
            console.log(`[${currentTime}] server.js Query:`, sqlQueryString);
            console.log(`[${currentTime}] server.js Result:`, data);
        }
        return res.json(data); // sends Response
    })

    // res.json("Hello from backend");
})

app.listen(8081, () => {
    console.log(`[${currentTime}] server.js listening to 8081`);
    // run command "node server.js" to start the server
})
