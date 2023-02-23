const express = require('express')
require('cors')()
const app = express()


app.get('/', (req, res)=>{
    res.send("Hello world spam")
})

app.listen(5000, ()=> {
    console.log("Server started")
})