var mongoose = require('../mongo');

var Schema = mongoose.Schema,
	ObjectID = Schema.ObjectID;

var Message = new Schema({
	email: {type: String},
	name: {type: String},
	photo: {type: String},
	message: String
})

var MessageModel = mongoose.model('message', Message);

module.exports = MessageModel;