const db = require('../../queries')

class MoodRecordsController {

  async createRecord(req, res) {
    const {name, user_id, date_time, comment} = req.body;
    const newRecord = await db.query(`INSERT INTO mood_record (name, date_time, user_id, comment) values ($1, $2, $3, $4) RETURNING *`, [name, date_time, user_id, comment]) 
    res.json(newRecord.rows[0])
  }

  async getRecordsByUser(req, res) {
    const id = req.query.id
    const posts = await db.query('SELECT  * from mood_record where user_id = $1', [id])
    res.json(posts.rows)

  }

  async deleteRecord(req, res) {
    const id = req.params.id;
    const post = await db.query('DELETE from mood_record where uid = $1', [id])
    res.json(post.rows[0])
    
  }
  async updateRecord(req, res) {
    const {name, date_time, comment, id} = req.body;
    const post = await db.query('UPDATE person set name = $1, date_time = $2, comment = $3 where id = $4 RETURNING *',
     [name, date_time, comment, id])
    res.json(post.rows[0])
  }
}

module.exports = new MoodRecordsController()