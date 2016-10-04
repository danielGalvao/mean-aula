var http = require('http')
,   app  = require('./config/express');
require('./config/database')('localhost/galvaopic');

http.createServer(app).listen(3000, function(){
  console.log('Start server on port 3000')
});
