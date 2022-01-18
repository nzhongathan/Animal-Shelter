const mongoose = require("mongoose");
const dotenv = require("dotenv").config({path: "process.env"})

exports.connect = () => {
    mongoose
        .connect(process.env.MONGOOSE_URI)
        .then(() => {
            console.log("Successfully connected");
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
};