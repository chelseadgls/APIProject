import mongoose from 'mongoose'
const Schema = mongoose.Schema

const gameSchema = new mongoose.Schema({
  id: Number,
  date: Date,
  home_team_score: Number,
  visitor_team_score: Number,
  season: Number,
  period: Number,
  status: String,
  time: String,
  postseason: Boolean,
  home_team: Object,
  visitor_team: Object,
})

export default mongoose.model('Game', gameSchema)
