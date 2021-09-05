import express from 'express'
import mysql from 'mysql'

const app: express.Express = express()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'client',
  password: 'password',
  database: 'timessns',
})

app.get('/db', (_req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' })
  connection.query('SELECT * from User', (error, results) => {
    if (error) throw error
    res.send(results[0])
  })
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
