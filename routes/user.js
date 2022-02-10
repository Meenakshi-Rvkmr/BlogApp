const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async(req,res)=>{
    try {
        const newUser = new User({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            roles: req.body.roles
        })
        const user = await newUser.save();
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json(error)
    }
})

//LOGIN
router.post("/login", async(req,res)=>{
    try {
       const user = await User.findOne({username:req.body.username});
       !user && res.status(400).json("Invalid Credentials!!");
       
       const validated = user.password == req.body.password;
       !validated&& res.status(400).json("Invalid Credentials!!");

       res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router