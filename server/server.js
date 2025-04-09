const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("benvenuto nel backend")
})

app.listen(4000, () => {
    console.log( "il server è in ascoltao alla porta 4000" );
})