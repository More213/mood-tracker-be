const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const express        = require('express');
const db             = require('./config/db');

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, dataBase) => {
  if (err) return console.log(err)
  require('./app/routes')(app, dataBase);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  }); 
})