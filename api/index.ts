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

app.post('/tweet/init', (_req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' })
  connection.query(
    `SELECT T.id, T.body, T.timestamp, T.user_id, U.name FROM Tweet AS T INNER JOIN User AS U ON U.id = T.user_id  ORDER BY timestamp DESC LIMIT 20;`,
    (error, results) => {
      if (error) throw error
      res.send(results)
    }
  )
})

app.post('/tweet/add', (req, res) => {
  if (!req.body.tweet) throw new Error('invalid format')
  let id = 0
  res.set({ 'Access-Control-Allow-Origin': '*' })
  connection.query(`select MAX(id) as max from Tweet;`, (error, results) => {
    if (error) throw error
    id = results[0].max + 1
    connection.query(
      `INSERT INTO Tweet VALUES (${id}, '${req.body.tweet.body}', '${req.body.tweet.userId}', (SELECT FROM_UNIXTIME(${req.body.tweet.timestamp})));`,
      (error, _results) => {
        if (error) throw error
        res.send('succcess')
      }
    )
  })
})

app.post('/tweet/delete', (req, res) => {
  if (!req.body.id || !req.body.userId) throw new Error('invalid format')
  res.set({ 'Access-Control-Allow-Origin': '*' })
  connection.query(
    `DELETE FROM Tweet WHERE id = ${req.body.id} AND user_id = ${req.body.userId} `,
    (error, _results) => {
      if (error) throw error
      res.send('success')
    }
  )
})

module.exports = {
  path: '/api',
  handler: app,
}
