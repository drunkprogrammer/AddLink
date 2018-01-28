module.exports.index = function(req, res, next) {
	db.links.findAll(function(err, links) {
		if(err) {
			return next(err);
		} else
			res.send(links);
	});
};

module.exports.create = function(req, res, next) {
	db.links.create(req.body.linkaddress, function(err, linkaddress) {
		if(err) {
			return next(err);
		} else {
			res.send(linkaddress);
		}
	});

};

module.exports.update = function(req, res, next) {
	db.links.update(req.param('id'), req.body.linkaddress, function(err, linkaddress) {
		if(err) {
			next(err);
		} else {
			res.send(linkaddress);
		}

	})

}

module.exports.show=function (req,res,next) {
	db.links.find(req.param('id'),req.body.linkaddress,function (err,linkaddress) {
		if (err) {
			return next(err);
		} else{
			res.send(linkaddress);
		}
	});
	
};
/*var mongoose=require('mongoose');
var counter=1;
var link=mongoose.model('link');
var SerialNumber={type:Number,default:()=>counter++};

exports.create = function ( req, res ){
  new link({
    aurl: req.body.linkaddress,
    updated: Date.now(),
    serial_number:SerialNumber
  }).save( function( err,link, count ){
    res.redirect( '/' );
  });
};
/*
link.find({serial_number:{$gt:0}}).sort({serial_number:-1})
.then(([first,...others])=>{
	if(first) 
	counter=first.serial_number+1;
});
*/

/*

exports.index = function ( req, res ){
  link.find().sort( 'updated' ).
    exec( function ( err, links ){
      res.render( 'index', {
          title : 'All collected link',
          links : links
      });
    });
};


exports.destroy = function ( req, res ){
  link.findById( req.params.id, function ( err, links ){
    link.remove( function ( err, links ){
      res.redirect( '/' );
    });
  });
};
*/
/*
exports.update = function ( req, res ){
  link.findById( req.params.id, function ( err, links ){
    link.linkaddress= req.body.linkaddress;
    link.updated = Date.now();
    link.save( function ( err, links, count ){
      res.redirect( '/' );
    });
  });
};
*/