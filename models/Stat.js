import mongoose from 'mongoose'
const Schema = mongoose.Schema

const statSchema = new mongoose.Schema({
  id: Number,
  ast: Number,
  blk: Number,
  dreb: Number,
  fg3_pct: Number,
  fg3a: Number,
  fg3m: Number,
  fg_pct: Number,
  fga: Number,
  fgm: Number,
  ft_pct: Number,
  fta: Number,
  ftm: Number,
  game: Object,
  min: String,
  oreb: Number,
  pf: Number,
  player: Object,
  pts: Number,
  reb: Number,
  stl: Number,
  team: Object,
  turnover: Number,
})

export default mongoose.model('Stat', statSchema)
