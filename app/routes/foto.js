module.exports = function(app){

  app.get('/v1/fotos', function(req, res){
    var fotos = [
      {_id:1, titulo:'Leao', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'},
      {_id:2, titulo:'Leao 2', url:'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg'}
    ];
    res.json(fotos);
  });
}
