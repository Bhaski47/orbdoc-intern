const mongoose = require('mongoose');
const {User} = require('../models/userModel');

const AllData = async(req,res) =>{
    try{
        const user = await User.find();
        return res.status(200).json({data:user});
    }
    catch(error){
        return res.status(500).json({ message: "Server Error For Creating User " + error });
    }
}
module.exports={AllData}