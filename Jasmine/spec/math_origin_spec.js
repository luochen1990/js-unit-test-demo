var math = require('../src/math');

describe("math", function(){
	describe("sum", function(){
		it("sum([]) == 0", function(){
			expect(math.sum([])).toBe(0);
		})
		it("sum([x]) == x", function(){
			var data = [
				[[0], 0],
				[[1], 1],
				[[999], 999]
			];
			data.forEach(function(test) {
				expect(math.sum(test[0])).toBe(test[1]);
			})
		})
		it("sum([x, y ...]) = x + y + ...", function(){
			var data = [
				[[1, 2], 3],
				[[1, 2, 3], 6],
				[[1, 2, 3, 4], 10]
			];
			data.forEach(function(test) {
				expect(math.sum(test[0])).toBe(test[1]);
			})
		})
	})
})

