var express = require('express')
,   app     = express()
,   consign = require('consign');

app.use(express.static('./public'));

consign()
  .include('app/routes')
  .into(app);

require('../app/routes/foto')(app);

module.exports = app;
