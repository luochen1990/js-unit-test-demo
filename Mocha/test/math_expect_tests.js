var math = require('../src/math');
var expect = require('chai').expect;

describe("math", function(){
	describe("sum", function(){
		it("sum([]) == 0", function(){
			expect(math.sum([])).to.equal(0);
		})
		it("sum([x]) == x", function(){
			var data = [
				[[0], 0],
				[[1], 1],
				[[999], 999]
			];
			data.forEach(function(test) {
				expect(math.sum(test[0])).to.equal(test[1]);
			})
		})
		it("sum([x, y ...]) = x + y + ...", function(){
			var data = [
				[[1, 2], 3],
				[[1, 2, 3], 6],
				[[1, 2, 3, 4], 10]
			];
			data.forEach(function(test) {
				expect(math.sum(test[0])).to.equal(test[1]);
			})
		})
	})
})
