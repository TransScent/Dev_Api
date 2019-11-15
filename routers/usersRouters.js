
const express=require('express');
const app = express();
const routes = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "50mb"}))
const con=require('../config/dbconfig');
const DATABASE_SP=require('../constant/database_sp');

routes.get("/getCountriesList",(req,res)=>{
    con.query(DATABASE_SP.getCountriesList,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});

module.exports = routes;