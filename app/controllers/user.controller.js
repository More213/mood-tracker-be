const db = require('../../queries')

class UserController {
  async getAllUsers(req, res) {
    res.send('hello')
  }

  async createUser(req, res) {
    const {name , password } = req.body;
    const newPerson = await db.query(`INSERT INTO person (name, password) values ($1, $2) RETURNING *`, [name, password]) 
    res.json(newPerson)
  }

  async deleteUser(req, res) {
    
  }

  async getOneUser(req, res) {
    
  }

  async updateUser(req, res) {
    
  }
}
module.exports = new UserController()