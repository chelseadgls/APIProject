import mongoose from 'mongoose'
const Schema = mongoose.Schema

const playerSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  position: String,
  team: Object,
})

export default mongoose.model('Player', playerSchema)
