const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://bhaskarg2003:Qwerty1234@orbdoc.kaxio4k.mongodb.net/?retryWrites=true&w=majority&appName=orbdoc")
        console.log("Connected To DB");
    }
    catch(err){
        console.error(err);
    }
}

module.exports={ connectDB };