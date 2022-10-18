import mongoose from 'mongoose'
const Schema = mongoose.Schema

const playerSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  position: String,
  height_feet: Number,
  height_inches: Number,
  weight_pounds: Number,
  team: Object,
})

export default mongoose.model('Player', playerSchema)
