const express=require('express');
const app = express();
const routes = express.Router();

// const TokenCheck=require('../middleware/middleware');
const con=require('../config/dbconfig');
const DATABASE_SP=require('../constant/database_sp');
routes.get("/getCountriesList",(req,res)=>{
    con.query(DATABASE_SP.getCountriesList,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.json({"status": "200",
                      "is_process":"Y",
                    "results":result[0]});
        }
    });
});
routes.post("/getStateList",(req,res)=>{
    con.query(DATABASE_SP.getStateList,[req.body.country_id],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.json({"status": "200",
                      "is_process":"Y",
                     "results":result[0]});
        }
    });
});

module.exports = routes;