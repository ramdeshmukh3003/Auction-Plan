const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  logo:{
    type:String,
    required:true,
  },
  basePrice: {
    type:String,
    required:true,
  },
  sold: {
     type: Boolean,
      default: false
     },
  soldAt:{
        type:Number
     },
  domain: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Domain', 
    required: true 
 },
  rating: {
    type: Number,
    required: true,
  },
  marketCapital: {
    type: Number,
    required: true,
  },
  soldTo: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Team", 
    default: null 
},

});

module.exports = mongoose.model("Company",companySchema);

// 668eca2127315224bae36aa4 company example

