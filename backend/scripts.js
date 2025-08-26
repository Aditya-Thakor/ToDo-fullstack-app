const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res)=>{
    // req.send("Hiii there..")
    req.write('hello');
});

app.listen(port, ()=>{
    console.log(`Sever started on port ${port}`);
    
});