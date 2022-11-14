const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser');




const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password: '',
    database:'node24db'
});

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log("db conn 24")

});


const app = express();

// port .env for others
const port = process.env.port || 3002;

// linking the puplic html file
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// handle form GET/POST request
app.post('/add4form', async (req, res) =>
{
   // res.json(req.body);
    const body = req.body;
    let username = body.username;
    let password = body.password;


    let post = { username: `${username}`, password: `${password}` };
    let sql = `INSERT INTO tester01 SET ?`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
       // res.send('input into tabel tester01 24');
        res.sendFile(__dirname+'/public/thanks.html')
    })

    // await db.execute(`
    //   INSERT INTO tester01(username, password) VALUES (
    //     @username, @password)`, {
    //     username: body.username,
    //     password: body.password,
    // });

   // res.end("yeas")
})




// create DataBase
app.get('/createdb', (req, res) =>
{
    let sql = `CREATE DATABASE node24db`;
    db.query(sql, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send(`Database creation 24`);
        
    })
});

// create table 
app.get('/createtable', (req, res) =>
{
    let sql = `CREATE TABLE tester01(id int AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(255), date VARCHAR(255), PRIMARY KEY (id), UNIQUE dateof (date))`;

    db.query(sql, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send('tabel creation 24');
    })
});

// insert data
app.get('/add1post', (req, res) =>
{
    let post = { username: 'nomberjuan', password: 'numberjtwo' };
    let sql = `INSERT INTO tester01 SET ?`;
    // (username, password) VALUES('${username}', '${password}' )`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send('input into tabel tester01 24')
    })


})








app.listen('3002', () =>
{
    console.log('server start 24')
})



