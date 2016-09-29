var api = {};
var fotos = [
  {_id:1, titulo:'Leao', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'},
  {_id:2, titulo:'Leao 2', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'}
];

api.lista = function(req, res){
  res.json(fotos);
};

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

module.exports = api;
