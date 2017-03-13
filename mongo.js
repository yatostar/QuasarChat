var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quasar', function (err, db) {
	console.log('connected to db');
});

module.exports = mongoose;