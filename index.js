// index.js
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello tea!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App on ${PORT}`);
});
function helloTea(name) {
    return `Hello, ${name}!`;
  }
  
  module.exports = helloTea;