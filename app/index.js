const express = require('express');
const fs = require('fs');

const app = express();

app.get('/message', (req, res) => {
  const msg = fs.readFileSync('/config/message.txt', 'utf8');
  res.send({ message: msg });
});

app.listen(3000, () => console.log('Running'));