const express = require('express');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});
con.connect((error) => {
    if (error) {
        console.log(error.message);
    } else {
    console.log("Connected to Mysql Database...");
    }
});
module.exports = con;
