function sum(ls){
	var r = 0;
	for(var i = 0; i < ls.length; i++) {
		r += ls[i];
	}
	return r;
}

module.exports = { sum: sum }
