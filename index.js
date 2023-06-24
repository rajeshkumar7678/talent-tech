const cors = require('cors');
const express = require('express');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('home route');
});
app.use('/users', userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log('db is connected');
  } catch (error) {
    console.log(error);
  }
  console.log('server is running');
});
