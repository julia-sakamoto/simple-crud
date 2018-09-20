import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Character from './character'

const app = express()
const port = 3001
const dbUrl = 'mongodb://localhost/crud'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, dbErr => {
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')

  app.post('/api/characters', (req, res) => {
    const { name, age } = req.body

    new Character({
      name,
      age
    }).save(err => {
      if (err) res.status(500)
      else res.status(200).send(`${name}(${age}) was successfully created`)
    })
  })

  app.get('/api/characters', (req, res) => {
    Character.find({}, (err, characterArray) => {
      if (err) res.status(500)
      else res.status(200).send(characterArray)
    })
  })

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})
