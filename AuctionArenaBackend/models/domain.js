const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
    name: {
         type: String,
         required:true,
     }
});

module.exports = mongoose.model('Domain', domainSchema);

// 668ec973d89e29a3ed361f28 domain 1