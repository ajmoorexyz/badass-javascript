// include our model
var Script = require('../models/models');

var createScript = function(req, res) {

	var newSnippet = new Script ({


	snippet         : req.body.name,
	functionality   : req.body.functionality,
	toggle          : false,
	tags            : req.body.tags
	});

	newSnippet.save(function(err, doc) {
		res.send(doc);
	});

	console.log(req.body);
};

module.exports = {
	createScript : createScript,
};