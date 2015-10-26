var mongoose = require('mongoose');


// define out Schema for MongoDB
var scriptSchema = mongoose.Schema({
	// snippet       : "console.log(this)",
	// functionality : "logs the value of this in it's current state.",
	// tags          : [{ text: 'JavaScript' },
	//                  { text: 'OOP' },
	//                  { text: 'Functional Programming' },]

	snippet          : {type : String},
	functionality    : {type : String},
	toggle			 : {type: Boolean, default : false},
	tags             : {type : Array},

});

module.exports = mongoose.model('Script', scriptSchema);