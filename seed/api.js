import axios from 'axios';
import fs from 'fs';

//Player endpoint
const playerURL = 'https://www.balldontlie.io/api/v1/players?per_page=100';

//Team endpoint
const teamURL = 'https://www.balldontlie.io/api/v1/teams';

//Game endpoint
const gameURL = 'https://www.balldontlie.io/api/v1/games'

//Stat endpoint
const statURL = 'https://www.balldontlie.io/api/v1/stats'

// Player
async function fetchPlayer() {
  let response = await axios.get(playerURL);
  const data = response.data;
  const playerData = JSON.stringify(data);
  fs.writeFile('playerdata.json', playerData, err => {
    if (err) {
      throw err
    }
    console.log('Player data is saved');
  });
};

//recursive function to call all player data
const getAllPlayers = useCallback((page, players) => {
  if (page) {
    return fetch(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${page}`)
      .then((response) => response.json())
      .catch(() => new Promise((r) => setTimeout(r, 25000)).then(() => getAllPlayers(page, players)))
      .then((result) => {
        return getAllPlayers(result.meta?.next_page, players.concat(result.data));
      });
  } else return players;
}, []);

fetchPlayer();

// Team
async function fetchTeam() {
  let response = await axios.get(teamURL);
  // console.log(response.data)
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