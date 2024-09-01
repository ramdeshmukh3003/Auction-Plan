const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: String,
    password:String,
    budget: Number,
    purchasedCompanies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
});

module.exports = mongoose.model("Team",teamSchema);

// 668ecb7217595395ae180086 John Doe -> team