const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// HOME LOGIC

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to world best mern series by Anu Technical using router");
    } catch (error) {
        console.log(error);
    }
    
}

// Registration Logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).json({message: "Email Already Exists"});
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password,});
          
        res.status(201).json({ 
            msg: "Registration Successful", 
            token:  await userCreated.generateToken(),
            userId: userCreated._id.toString(), 
        });
    } catch (error) {
        // res.status(400).json("interval Server Error");
        next(error);
    }
}

// USER LOGIN LOGIC

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if(!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        // const user= await bcrypt.compare( password, userExist.password );
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(200).json({
                msg: "Login Succesful",
                token:  await userExist.generateToken(),
                userId: userExist._id.toString(),     
            });
        } else {
            res.status(401).json({msg: "Invalid Email or Password"});
        }
    } catch (error) {
        res.status(500).json("User Can Not Login");
    }  
};


// To send user data - User Logic

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
};

module.exports = { home,  register, login, user };