var mongoose=require('mongoose');
var linktable=mongoose.Schema;
var addlink=new linktable({
	aurl:String,
	updated:Date
	//anumber:ObjectId
});
mongoose.model('addlink',addlink);
mongoose.connect('mongodb://localhost/express-addlink');
