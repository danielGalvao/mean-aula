var http = require('http');

http.createServer(function(req, res){

  res.end();

}).listen(3000, function(){
  console.log('Start server on port 3000')
});
