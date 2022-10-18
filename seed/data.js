import mongoose from '../db/connection.js';
import playerData from './playerdata.json' assert { type: "json" }
import teamData from './teamdata.json' assert { type: "json" }
import Player from '../models/Player.js' 
import Team from '../models/Team.js'

// console.log(playerData);
// console.log(teamData);
  
let structuredPlayerData = playerData.map(
  ({ id, first_name, last_name, position, height_feet, height_inches, weight_pounds, team }) => {
    return {
      id,
      first_name,
      last_name,
      position,
      height_feet,
      height_inches,
      weight_pounds,
      team
    };
  }
);
  
let structuredTeamData = teamData.map(
  ({ id, abbreviation, city, conference, division, full_name, name }) => {
    return {
      id,
      abbreviation,
      city,
      conference,
      division,
      full_name,
      name
    };
  }
);

// insert data
let insertData = async () => {
  await Player.deleteMany({});
  await Team.deleteMany({});
  await Player.create(structuredPlayerData);
  await Team.create(structuredTeamData);
  console.log('Teams and Players inserted');
  // mongoose.disconnect();
};

insertData();