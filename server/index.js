const {connectDB} = require('./connectDB');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const app = express();
process.env.TZ = "Asia/Kolkata";

dotenv.config();
app.use(cors());

app.use(bodyParser.json({extended:true,limit:'32mb'}));
app.use(bodyParser.urlencoded({limit:'32mb',extended:true}));

connectDB();
app.use("/api/user",userRoute);
app.listen(3006,()=>console.log("Server Running on Port 3000"))