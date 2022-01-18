const { response } = require('express')
const express = require('express')
const router = express.Router()
const dotenv = require("dotenv").config({path: "process.env"})
const bodyParser = require('body-parser')
const User = require('../mongo/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../mongo/auth');

require("../mongo/database").connect()

router.use(bodyParser.urlencoded({extended: true}))
router.post("/register", async (req, res) => {
    try {
        //console.log("Good")
        var {first_name, last_name, email, password} = req.body;

        if (!(email && password && first_name && last_name)) {
            res.status(400)
        }
        
        email = email.toLowerCase()
        const oldUser = await User.findOne({email});

        if (oldUser) {
            return res.status(409).send("User already exists")
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email,
            password: encryptedPassword,
        });

        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h',
            }
        );
        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        console.log(err)
    }
})
router.post("/login", async (req, res) => {
    try {
        var {email, password} = req.body;

        if(!(email && password)) {
            res.status(400);
        }

        email = email.toLowerCase();
        const user = await User.findOne({email});

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            user.token = token;
            
            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
    
})
router.get("/welcome", auth, (req, res) => {
    //console.log("Welcome Prompt")
    res.status(200).send("Welcome!")
})
module.exports = router