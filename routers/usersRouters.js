
const express=require('express');
const app = express();
const routes = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const con=require('../config/dbconfig');
const dataBaseSP=require('../constant/db_sp');

routes.get("/",(req,res)=>{
    con.query("SELECT * FROM countries",(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    })
})

module.exports = routes;