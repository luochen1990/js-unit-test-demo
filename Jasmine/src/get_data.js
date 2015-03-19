function get_data(arg, callback) {
	setTimeout(function() {
		callback('data about ' + arg);
	});
}

module.exports = get_data
