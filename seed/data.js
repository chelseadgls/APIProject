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

// Game
let structuredGameData = gameData.map(
  ({ id, date, home_team_score, visitor_team_score, season, period, status, time, postseason, home_team, visitor_team }) => {
    return {
      id,
      date,
      home_team_score,
      visitor_team_score,
      season,
      period,
      status,
      time,
      postseason,
      home_team,
      visitor_team
    };
  }
);

// Stat
let structuredStatData = statData.map(
  ({ id, ast, blk, dreb, fg3_pct, fg3a, fg3m, fga, fgm, ft_pct, fta, ftm, game, min, oreb, pf, player, pts, reb, stl, team, turnover }) => {
    return {
      id,
      ast,
      blk,
      dreb,
      fg3_pct,
      fg3a,
      fg3m,
      fg3_pct,
      fga,
      fgm,
      ft_pct,
      fta,
      ftm,
      game,
      min,
      oreb,
      pf,
      player,
      pts,
      reb,
      stl,
      team,
      turnover
    };
  }
);

// insert data
let insertData = async () => {
  await Player.deleteMany({});
  await Team.deleteMany({});
  await Game.deleteMany({});
  await Stat.deleteMany({});
  await Player.create(structuredPlayerData);
  await Team.create(structuredTeamData);
  await Game.create(structuredGameData);
  await Stat.create(structuredStatData);
  console.log('Data inserted');
  // mongoose.disconnect();
};

insertData();