var api = {};
var contador = 2;
var fotos = [
  {_id:1, titulo:'Leao', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'},
  {_id:2, titulo:'Leao 2', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'}
];

api.lista = function(req, res){
  res.json(fotos);
};

api.addFoto = function(req, res){
  var foto = req.body;
  foto._id = ++contador;
  fotos.push(foto);
  res.json(foto);
}

api.buscaPorId = function(req, res){
  var foto = fotos.find(function(foto){
    return foto._id == req.params.id;
  });
  res.json(foto);
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
