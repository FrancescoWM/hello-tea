// index.js
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ciao Mondo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App in ascolto sulla porta ${PORT}`);
});
function helloTea(name) {
    return `Hello, ${name}!`;
  }
  
  module.exports = helloTea;