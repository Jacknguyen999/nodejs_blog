

const express = require('express')
const app = express()
const port = 8000;

app.get ('/' , (req,res) =>
{
    var a = 1;
    var b = 2;
    var c = a+b;
    return res.send("Hello Word")
})
app.listen(port ,() => console.log(`App is listening in port ${port}`))

