expect = require('chai').expect
math = require('../src/math')

describe "math", ->
	describe "sum", ->
		it "sum([]) == 0", ->
			expect(math.sum([])).to.equal 0

		it "sum([x]) == x", ->
			data = [
				[[0], 0],
				[[1], 1],
				[[999], 999]
			]
			data.forEach ([input, output]) ->
				expect(math.sum(input)).to.equal output

		it "sum([x, y ...]) == x + y + ...", ->
			data = [
				[[1, 2], 3],
				[[1, 2, 3], 6],
				[[1, 2, 3, 4], 10]
			]
			data.forEach ([input, output]) ->
				expect(math.sum(input)).to.equal output

