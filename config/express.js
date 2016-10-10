var express = require('express')
,   app     = express()
,   consign = require('consign')
,   bodyParser = require('body-parser');

app.set('secret', 'testandojwt')

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes')
  .into(app);

module.exports = app;
