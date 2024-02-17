const Users = require("../Models/User.model.js");

exports.loginUser = async(req,res)=>{
    const {email,password} =req.body;
   const userdetails = await Users.findOne({email});
        if(userdetails){
           if(password === userdetails.password){
               res.json({message:"login sucessful",user:userdetails})
           }else{
               res.json({message:"wrong credentials"})
           }
        }else{
            res.json({message:" user is not registered"})
        }
  }

exports.registerUser = async (req,res)=>{
    const {name,email,password} =req.body;
   const userdetails = await Users.findOne({email});
        if(userdetails){
            res.json({message:"user already exist"})
        }else {
            const user = new Users({name,email,password})
            user.save();
            res.json({message:"sucessfull"})
        }
  }
