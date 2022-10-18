import mongoose from '../db/connection.js';
import playerData from './playerdata.json' assert { type: "json" }
import teamData from './teamdata.json' assert { type: "json" }
import Player from '../models/Player.js' 
import Team from '../models/Team.js'


// console.log(playerData);
// console.log(teamData);

let structuredPlayerData = playerData.map(
  ({ _id, name, headOfHouse, houseGhost, founder, school, members, values, colors }) => {
    return {
      _id,
      name,
      headOfHouse,
      houseGhost,
      founder,
      school,
      members,
      values,
      colors,
    };
  }
);

let structuredTeamData = teamData.map(
  ({ _id, name, house, school, ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater, bloodStatus, species }) => {
    return {
      _id,
      name,
      house,
      school,
      ministryOfMagic,
      orderOfThePhoenix,
      dumbledoresArmy,
      deathEater,
      bloodStatus,
      species,
    };
  }
);

//insert data
// let insertData = async () => {
//   await Player.deleteMany({});
//   await Team.deleteMany({});
//   await Player.create(structuredPlayerData);
//   await Team.create(structuredTeamData);
//   console.log('Teams and Players inserted');
//   // mongoose.disconnect();
// };

// insertData();