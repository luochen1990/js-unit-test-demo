function sum(ls){
	var r = 0;
	for(var i = 0; i < ls.length; i++) {
		r += ls[i];
	}
	return r;
}

if(typeof module !== "undefined" && module !== null){
	module.exports = {sum: sum}
} else {
	window.math = {sum: sum}
}
