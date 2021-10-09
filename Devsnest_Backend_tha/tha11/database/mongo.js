var mongoose = require('mongoose');
var mongodb = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology: true})
