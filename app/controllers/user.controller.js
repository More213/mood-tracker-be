const db = require('../../queries')

class UserController {

  async getAllUsers(req, res) {
    const users = await db.query('SELECT * from person')
    res.json(users.rows)
  }

  async createUser(req, res) {
    const {name , password } = req.body;
    const newPerson = await db.query(`INSERT INTO person (name, password) values ($1, $2) RETURNING *`, [name, password]) 
    res.json(newPerson.rows[0])
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query('DELETE from person where uid = $1', [id])
    res.json(user.rows[0])
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query('SELECT * from person where uid = $1', [id])
    res.json(user.rows[0])
  }

  async updateUser(req, res) {
    const {name, password, uid} = req.body;
    const user = await db.query('UPDATE person set name = $1, password = $2 where uid = $3 RETURNING *',
     [name, password, uid])
    res.json(user.rows[0])
  }
}
module.exports = new UserController()