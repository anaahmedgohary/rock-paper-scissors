const express = require('express');

const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password: ''
    // database:''
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
})








app.listen('3002', () =>
{
    console.log('server start 24')
})


