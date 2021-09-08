import express from 'express'
import mysql from 'mysql'

const app: express.Express = express()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'client',
  password: 'password',
  database: 'timessns',
})

app.use(express.json())

app.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password)
    throw new Error('invalid format')
  res.set({ 'Access-Control-Allow-Origin': '*' })
  connection.query(
    `SELECT id FROM User WHERE name = '${req.body.username}' AND password = '${req.body.password}'`,
    (error, results) => {
      if (error) throw error
      res.send(results[0])
    }
  )
})

module.exports = {
  path: '/api',
  handler: app,
}
