const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("DB Connected Successfully"))
    .catch((error)=>{
        console.log("DB connection Failed");
        console.log("Error");
        process.exit(1);
    })
}