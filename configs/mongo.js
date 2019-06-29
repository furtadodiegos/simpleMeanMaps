const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
	console.log('conneted to database');
});

module.exports = mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true }
);
