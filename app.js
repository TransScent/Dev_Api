const express = require('express');
const app = express();
const router=require('./routers/usersRouters');
app.use('/api/learning',router);


const port = process.env.PORT || 8020;
app.listen(port, () => { console.log(`Server is running at port: ${port}`)});







    
    
