const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/teamDB").then(() => {
    console.log("connection to db successful !");
}).catch((err) => {
    console.log(err);
})