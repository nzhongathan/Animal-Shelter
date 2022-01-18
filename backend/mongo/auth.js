const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config({path: "process.env"})

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    //console.log("----")
    //console.log(token)
    if (!token) {
        return res.status(403).send("Token required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log(decoded)
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;