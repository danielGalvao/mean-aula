module.exports = function(uri){
  var mongoose = require('mongoose');

  mongoose.connect('mongodb://'+uri);

  mongoose.connection.on('connected', function(){
    console.log('Conectado ao mongoDB');
  });

  mongoose.connection.on('error',function(error){
    console.log('Erro: '+error)
  });

  mongoose.connection.on('disconnect', function(){
    console.log('Conexão desconectada do mongDB');
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log('Aplicação finalizada');
      process.exit(0);
    });
  });
}
