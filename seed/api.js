import axios from 'axios';
import fs from 'fs';

//Player endpoint
const playerURL = 'https://www.balldontlie.io/api/v1/players';

//Team endpoint
const teamURL = 'https://www.balldontlie.io/api/v1/teams';

// API Call
async function fetchPlayer() {
  let response = await axios.get(playerURL);
  console.log(response.data)
  const data = response.data;
  const playerData = JSON.stringify(data);
  fs.writeFile('playerdata.json', playerData, err => {
    if (err) {
      throw err
    }
    console.log('Player data is saved');
  });
};

fetchPlayer();

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

fetchTeam();