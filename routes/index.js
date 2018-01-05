var mongoose=require('mongoose');
var addlink=mongoose.model('addlink');
exports.create = function ( req, res ){
  new addlink({
    aurl: req.body.linkaddress,
    updated: Date.now()
  }).save( function( err,link, count ){
    res.redirect( '/' );
  });
};
exports.index = function ( req, res ){
  addlink.find().sort( '-updated' ).
    exec( function ( err, links ){
      res.render( 'index', {
          title : 'All collected link',
          links : links
      });
    });
};
exports.destroy = function ( req, res ){
  addlink.findById( req.params.id, function ( err, link ){
    link.remove( function ( err, link ){
      res.redirect( '/' );
    });
  });
};
exports.update = function ( req, res ){
  addlink.findById( req.params.id, function ( err, link ){
    link.linkaddress= req.body.linkaddress;
    link.updated = Date.now();
    link.save( function ( err, link, count ){
      res.redirect( '/' );
    });
  });
};
