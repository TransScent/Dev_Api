
const express=require('express');
const app = express();
const routes = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "50mb"}))
const con=require('../config/dbconfig');
const DATABASE_SP=require('../constant/database_sp');

routes.get("/getCountriesList",(req,res)=>{


    console.log(req.body);
    con.query(DATABASE_SP.getCountriesList,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.json({"status": 200,
                      "is_process":"Y",
                    "results":result[0]});
        }
    });
});

module.exports = routes;