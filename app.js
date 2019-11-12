const express = require('express');
const app = express();
const con=require("./routers/routes")

app.use('./routers/routers')
const port = process.env.PORT || 8020;
app.listen(port, () => { console.log(`Server is running at port: ${port}`)});







    
    
