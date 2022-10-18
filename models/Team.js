import mongoose from 'mongoose'
const Schema = mongoose.Schema

const teamSchema = new mongoose.Schema({
  id: Number,
  abbreviation: String,
  city: String,
  conference: String,
  division: String,
  full_name: String,
  name: String,
})

export default mongoose.model('Team', teamSchema)
