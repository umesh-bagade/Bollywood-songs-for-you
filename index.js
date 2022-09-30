const express = require("express")
const app = express();

const data = require("data.json");

app.use(express.json())

app.get('/', (req, res)=>{
    return res.json({
        message: "Learning API"
    })
});

// any random
app.get('/random', (req,res)=>{
    const numberOfElements = data.length;
    const randomNumber = parseInt(Math.random()*numberOfElements);
    return res.json(data[randomNumber])
});

// app.listen(5000, ()=>{
//     console.log("Server Started!")
// })

module.exports = app;