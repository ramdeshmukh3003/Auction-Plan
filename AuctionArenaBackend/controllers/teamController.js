const mongoose = require("mongoose");
const Company = require("../models/company");
const Team = require("../models/team");
const Domain = require("../models/domain");

// working
exports.createTeam = async (req, res) => {
    try {
      const { name, password, budget } = req.body;

      const newTeam = new Team({
        name,
        password,
        budget,
        purchasedCompanies: []
      });

      await newTeam.save();
      res.status(201).json({ message: "Team created successfully", team: newTeam });
    } catch (error) {
      res.status(500).json({ message: "Error creating team", error });
    }
  };

  // working
exports.getTeamData = async (req, res) => {
    try {
      const { id } = req.params;

      // Find the team and populate the purchased companies
      const team = await Team.findById(id);
  
      if (!team) {
        return res.status(404).json({ message: "Team not found" });
      }
      res.status(200).json({ team });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving team data", error });
    }
  };

// working
exports.getAllTeams = async (req, res) => {
    try {
      // Find all teams and populate the purchased companies
      const teams = await Team.find().populate('purchasedCompanies');
  
      res.status(200).json({ teams });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving teams data", error });
    }
};


