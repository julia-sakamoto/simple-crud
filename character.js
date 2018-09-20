import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const CharacterSchema = mongoose.Schema({
  name: String,
  age: Number
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character
