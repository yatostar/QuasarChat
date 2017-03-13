var mongoose = require('../mongo');

var Schema = mongoose.Schema,
	ObjectID = Schema.ObjectID;

var User = new Schema({
	user_email: {type: String},
	user_name: {type: String},
	photo_option: {type: Boolean, default: false},
	password: String
})

var UserModel = mongoose.model('user', User);

module.exports = UserModel;