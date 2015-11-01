var request = require('request');
var cheerio = require('cheerio');

const URL = 'http://www.radiobrume.fr/data.php';

module.exports = function getInfo () {
	return new Promise((resolve, reject) => {
		request(URL, (err, res, html) => {
			if (err) reject(err);

			var $ = cheerio.load(html);
			resolve({
				artist: $('tr td:nth-child(2)').text().trim(),
				title: $('tr td:nth-child(3)').text().trim()
			});
		});
	});
}
