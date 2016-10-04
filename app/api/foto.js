var mongoose = require('mongoose');
var api = {};

api.lista = function(req, res){
  var model = mongoose.model('Foto');
  model.find({}).then(function(fotos){
    res.json(fotos);
  },function(error){
    res.status(500).json(error);
  })
};

api.addFoto = function(req, res){

}

api.buscaPorId = function(req, res){

};

api.removePorId = function(req, res){
 fotos = fotos.filter(function(foto){
   return  foto._id != req.params.id;
 });
 res.sendStatus(204);
};

api.atualiza = function(req, res){
  var foto = req.body
  ,   fotoId = req.params.id;
  var index = fotos.findIndex(function(foto){
    return foto._id == fotoId;
  });
  fotos[index] = foto;

  res.sendStatus(200);
}

module.exports = api;
