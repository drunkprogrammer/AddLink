//引入mongoose驱动，专用于nodejs,基于mongodb,简化操作。通过关系型数据库思想设计非关系型数据库
var mongoose=require('mongoose');

//Schema用于定义数据库的结构，每个Schema会映射到mongodb的一个collection
var Schema=mongoose.Schema;
var links=new Schema({
	aurl:String,
	updated:Date,
	serial_number:Number
});

//model是由Schema编译而成的构造器，具有抽象的属性和行为，可以对数据库进行增删改查。
//model方法将Schema编译成model,第一个参数(模型名称)和返回值的名称需要相同
//　Mongoose会将集合名称设置为模型名称的小写版。如果名称的最后一个字符是字母，则会变成复数；如果名称的最后一个字符是数字，则不变；如果模型名称为"MyModel"，则集合名称为"mymodels"；如果模型名称为"Model1"，则集合名称为"model1"
var link=mongoose.model('link',links);


//使用connect方法连接到本地数据库addlink
mongoose.connect('mongodb://localhost/addlink');
