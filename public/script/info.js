var fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/../json/info.json', 'utf-8'));
// console.log(module.exports.main);