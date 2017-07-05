var hdb    = require('hdb');
var config = require('./config');
var client = hdb.createClient({
  host     : config.host,
  port     : config.port,
  user     : config.user,
  password : config.password
});
client.on('error', function (err) {
  console.error('Network connection error', err);
});
client.connect(function (err) {
  if (err) {
  	return console.error('Connect error', err);
  }
  client.exec('select * from "SAPABAP1"."ZINTF_MAS_SD"', function (err, rows) {
	client.end();
    if (err) {
      return console.error('Execute error:', err);
    }
    console.log('Results:', rows);
  });
});