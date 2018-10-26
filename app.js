const fallback = require('express-history-api-fallback');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const root = path.join(__dirname, './public');

const generate = require('./routes/generate');

app.set('port', 80);

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));
app.use(bodyParser.json());

app.post('/', generate);

// start server
const server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
