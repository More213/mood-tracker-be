var Router = require('express');
var router = new Router();
const recordController = require('../controllers/moodRecords.controller');

router.post('/record', recordController.createRecord)

router.get('/records', recordController.getRecordsByUser)

router.delete('/record/:id', recordController.deleteRecord)

router.put('/record/:id', recordController.updateRecord)

module.exports = router