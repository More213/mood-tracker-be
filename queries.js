const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mood_tracker',
  password: '123456',
  port: 5432,
})
module.exports = pool