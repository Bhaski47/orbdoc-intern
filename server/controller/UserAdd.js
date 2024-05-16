const { User } = require('../models/userModel');

const UserAdd = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        const favno = parseInt(req.body.favno)
        if (user) return res.status(200).json({ message: "Email Already Exists", data: user.alert });
        
        const newUser = new User({
            email: req.body.email,
            favno: favno,
            alert: req.body.alert
        });
        
        await newUser.save();
        
        res.status(200).json({ message: "User Details Added" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error For Creating User " + error });
    }
}

module.exports = { UserAdd };
