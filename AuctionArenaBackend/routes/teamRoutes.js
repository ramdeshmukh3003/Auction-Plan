const express = require("express");
const router = express.Router();

const {createTeam,getTeamData,getAllTeams} = require("../controllers/teamController");

router.post("/team/createTeam",createTeam);
router.get("/team/getTeamData/:id",getTeamData);
router.get("/team/getAllTeamsData",getAllTeams);

module.exports = router;
