const express = require('express');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'angular'
});
con.connect((error) => {
    if (error) {
        console.log(error.message);
    } else {
    console.log("DataBase Connected Successfully...");
    console.log("Server running...");
    }
});
module.exports = con;
