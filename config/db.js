const mongoose = require('mongoose');
require('dotenv').config();

const secretKey1 = process.env.secretKey1;
const secretKey2 = process.env.secretKey2;

const connection = mongoose.connect(process.env.mongourl);

module.exports = {
  connection,
  secretKey1,
  secretKey2
};
