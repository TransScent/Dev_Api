const con=require('./dbconfig');
const express=require('express');
const bodyParser = require('body-parser');
const dataBaseSP=require('./constant/db_sp');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    con.query("SELECT * FROM actor",(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    })
})