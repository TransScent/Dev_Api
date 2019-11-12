const con=require('./dbconfig');
const express=require('express');
const bodyParser = require('body-parser');
const dataBaseSP=require('./constant/db_sp');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/users',function(req, res){
con.query(dataBaseSP.actor,(error,results)=>{
    if(error){
        console.log(error)
    }else{
        // console.log(results);
        res.json({code:200,
                 status:"Success",
                result:results});
    }
})
});

const port = process.env.PORT || 8020;
app.listen(port, () => { console.log(`Server is running at port: ${port}`)});







    
    
