const express        = require('express');
const userRouter = require('./app/routes/user.routes');
const moodRecordRouter = require('./app/routes/moodRecords.routes')

const PORT = process.env.PORT || 4020

const app = express()

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', moodRecordRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
