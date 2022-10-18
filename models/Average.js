import mongoose from 'mongoose'
const Schema = mongoose.Schema

const averageSchema = new mongoose.Schema({
  games_played: Number,
  player_id: Number,
  Season: Number,
  fgm: Number,
  fga: Number,
  fg3m: Number,
  fg3a: Number,
  ftm: Number,
  fta: Number,
  oreb: Number,
  dreb: Number,
  reb: Number,
  ast: Number,
  stl: Number,
  blk: Number,
  turnover: Number,
  pf: Number,
  pts: Number,
  fg_pct: Number,
  fg3_pct: Number,
  ft_pct: Number,
})

export default mongoose.model('Average', averageSchema)
