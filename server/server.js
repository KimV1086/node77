const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const messages = require('./app/messages');
const fileDb = require('./fileDb');

fileDb.init();


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('/messages', messages);

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});