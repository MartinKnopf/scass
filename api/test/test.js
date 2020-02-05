const assert = require('assert')

const generate = require('../routes/generate')

describe('generate', () => {
	it('should generate the same password for the same input', done => {
		let req = {
			body: {
				apiVersion: '1',
				payload: 'abc123'
			}
		}
		
		let res = {
			send(password) {
				assert.equal(password, ';S^ztglY9n5LA015');
				done();
			}
		}

		generate(req, res);
	});
});
