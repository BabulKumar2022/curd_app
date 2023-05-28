const express = require("express")
const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

const app = express()
const PORT = process.env.PORT || 5000 ;


app.use(express.json())
app.use(cors())
app.get("/", (req, res)=>{
    res.send("server is running correctly")
})
 
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB is connected"))
.catch((err)=> console.log(err))

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))