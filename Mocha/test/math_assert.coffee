require 'coffee-mate/global'
math = require('../src/math')

describe "math", ->
	describe "sum", ->
		it "sum([]) == 0", ->
			assert -> math.sum([]) == 0

		it "sum([x]) == x", ->
			data = [
				[[0], 0],
				[[1], 1],
				[[999], 999]
			]
			data.forEach ([input, output]) ->
				assert -> math.sum(input) == output

		it "sum([x, y ...]) == x + y + ...", ->
			data = [
				[[1, 2], 3],
				[[1, 2, 3], 6],
				[[1, 2, 3, 4], 10]
			]
			data.forEach ([input, output]) ->
				assert -> math.sum(input) == output

