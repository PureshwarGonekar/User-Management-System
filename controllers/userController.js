const User = require('../models/user');

const createUser = async (req,res)=>{
    try {
        const user = new User({userId: req.body.userId, password:req.body.password});
        user.save();
        if(user){
            const users = await User.find();
            res.render('adminDashboard', {users: users});
        }
        else{
            res.send("Error");
        }
        
    } catch (error) {
        res.send("Error or "+ error);
    }
}

const viewUsers = async (req,res)=>{
    try {
       const users = await User.find();
       res.render('viewUsers', {users: users});
        
    } catch (error) {
        res.send("Error or "+ error);
    }
}

const updateUser = async (req,res)=>{
    try {
       const user = await User.findOneAndUpdate({_id: req.body.ID},{name: req.body.name, profileImage:req.file.filename},{new: true} );
       console.log('updatedUser',user);
       res.render('userDashboard', {user: user});
    } catch (error) {
        res.send("Error or "+ error);
    }
}

const authUser = async (req,res)=>{
    try {
        const user = await User.findOne({userId: req.body.userId, password:req.body.password});
        if(user){
            res.render('userDashboard', {user: user});
        }
        else{
            res.render('userLogin', {message: "Invalid User Id or Password" })
        }
        
    } catch (error) {
        res.send("Invalid User Id or Password or "+ error);
    }
}
module.exports = {createUser, viewUsers, authUser, updateUser};