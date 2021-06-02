const express = require('express')
const app = express()

app.get('/', (req,res)=> res.send("Funcionou!"));
app.listen(process.env.PORT || 3000);