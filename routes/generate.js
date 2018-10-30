const crypto = require('crypto');
const renderLessPassPassword = require("lesspass-render-password");
const options = {
  length: 16,
  lowercase: true,
  uppercase: true,
  digits: true,
  symbols: true
};

module.exports = (req, res) => {
	if(req.body.apiVersion == '1') {
		res.send(hash(JSON.stringify(req.body.payload)));
	}
};

const hash = data => {
	let key = crypto.pbkdf2Sync(data, 'salt', 100000, 512, 'sha512').toString('hex');
	return renderLessPassPassword(key, options);
};
