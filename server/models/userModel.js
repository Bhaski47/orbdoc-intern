const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: { type: String, required: true,unique:true },
    favno: { type: Number, required: true },
    alert: { type: Boolean, required: true },
})

const User = mongoose.model("User", userSchema);
module.exports = { User };