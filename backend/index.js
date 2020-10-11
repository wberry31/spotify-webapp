const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const PORT = 8000

const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(cors())

app.use(require('./routes'))

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
