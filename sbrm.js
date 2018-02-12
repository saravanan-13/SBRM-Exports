var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/client'));

var port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log('SBRM Exports webapp...listening on port %d!', this.address().port);
});