var get_data = require('../src/get_data');
var expect = require('chai').expect;

describe('get_data', function(){
  describe('get_data() func', function(){
    it('should get a string with correct length', function(done){
		get_data('abc', function(result){
			expect(result).have.length(14);
			done();
		});
    })
  })
})

