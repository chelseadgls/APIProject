import axios from 'axios';
import fs from 'fs';

//Player endpoint
const playerURL = 'https://www.balldontlie.io/api/v1/players?per_page=100&page=1';

//Team endpoint
const teamURL = 'https://www.balldontlie.io/api/v1/teams';

//Game endpoint
const gameURL = 'https://www.balldontlie.io/api/v1/games'

//Stat endpoint
const statURL = 'https://www.balldontlie.io/api/v1/stats'

// Player
let allPlayers = [];
for (let i = 0; i < 40; i++) {
  async function fetchPlayer() {
    let response = await axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`);
    allPlayers.push(response.data.data);
    console.log(allPlayers);
    // convert data to JSON
    // const data = response.data;
    const playerData = JSON.stringify(allPlayers);
    fs.writeFile('playerdata.json', playerData, err => {
      if (err) {
        throw err
      }
      console.log('Player data is saved');
    });
  };
  // fetchPlayer();
}

// Team
async function fetchTeam() {
  let response = await axios.get(teamURL);
  console.log(response.data)
  const data = response.data;
  const teamData = JSON.stringify(data);
  fs.writeFile('teamdata.json', teamData, err => {
    if (err) {
      throw err
    }
    console.log('Team data is saved');
  });
};

// fetchTeam();

// Game
async function fetchGame() {
  let response = await axios.get(gameURL);
  // console.log(response.data)
  const data = response.data;
  const gameData = JSON.stringify(data);
  fs.writeFile('gamedata.json', gameData, err => {
    if (err) {
      throw err
    }
    console.log('Game data is saved');
  });
};

// fetchGame();

// Stat
async function fetchStat() {
  let response = await axios.get(statURL);
  // console.log(response.data)
  const data = response.data;
  const statData = JSON.stringify(data);
  fs.writeFile('statdata.json', statData, err => {
    if (err) {
      throw err
    }
    console.log('Stat data is saved');
  });
};

// fetchStat();