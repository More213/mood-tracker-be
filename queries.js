const Pool = require('pg').Pool
const pool = new Pool({
  user: 'develop',
  host: '127.0.0.1',
  database: 'mood-tracker',
  password: '123456',
  port: 5432,
})
module.exports = pool