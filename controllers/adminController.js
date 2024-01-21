const Admin = require('../models/admin');
const User = require('../models/user');

const authAdmin = async (req,res)=>{
    try {
        const admin = await Admin.findOne({userId: req.body.userId, password:req.body.password});
        if(admin){
            const users = await User.find();
            res.render('adminDashboard', {users: users});
        }
        else{
            res.render('adminLogin', {message: "Invalid User Id or Password" })
        }
        
    } catch (error) {
        res.send("Invalid User Id or Password or "+ error);
    }
}

const acceptUser = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id: req.body.ID},{status:"Accepted"});
        if(user){
            const users = await User.find();
            res.render('viewUsers', {users: users});
        }
        else{
            res.send("Failed to accept the user");
        }
        
    } catch (error) {
        res.send("Failed to accept the user"+ error);
    }
}

const deleteUser = async (req,res)=>{
    try {
        const user = await User.deleteOne({_id: req.body.ID});
        if(user){
            const users = await User.find();
            res.render('viewUsers', {users: users});
        }
        else{
            res.send("Failed to delete the user");
        }
        
    } catch (error) {
        res.send("Failed to delete the user "+ error);
    }
}

module.exports = {authAdmin, acceptUser, deleteUser};