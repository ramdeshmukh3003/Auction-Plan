const mongoose = require("mongoose");
const Company = require("../models/company");
const Team = require("../models/team");
const Domain = require("../models/domain");

exports.createDomain = async (req, res) => {
    try {
      const { name } = req.body;
  
      const newDomain = new Domain({
        name
      });
  
      await newDomain.save();
      res.status(201).json({ message: "Domain created successfully", domain: newDomain });
    } catch (error) {
      res.status(500).json({ message: "Error creating domain", error });
    }
  };