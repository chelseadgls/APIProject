import mongoose from '../db/connection.js';
import playerData from './playerdata.json' assert { type: "json" }
import teamData from './teamdata.json' assert { type: "json" }
import gameData from './gamedata.json' assert { type: "json" }
import statData from './statdata.json' assert { type: "json" }
import Player from '../models/Player.js' 
import Team from '../models/Team.js'
import Game from '../models/Game.js'
import Stat from '../models/Stat.js'
  
// Player
let structuredPlayerData = playerData.map(
  ({ id, first_name, last_name, position, team }) => {
    return {
      id,
      first_name,
      last_name,
      position,
      team
    };
  }
);
  
// Team
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
  console.log('Data inserted');
  // mongoose.disconnect();
};

  insertData();