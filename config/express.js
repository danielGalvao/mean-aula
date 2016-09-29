var express = require('express')
,   app     = express()
,   consign = require('consign')
,   bodyParser = require('body-parser');

app.use(express.static('./public'));

app.use(bodyParser.json());

consign({cwd: 'app'})
  .include('api')
  .then('routes')
  .into(app);

module.exports = app;
