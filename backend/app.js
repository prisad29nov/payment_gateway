const express =require("express")
const app = express();
const cors=require("cors")
const paymentRoute = require("./routes/paymentRoutes")
app.use(cors())
app.use("/api",paymentRoute)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
module.exports=app;