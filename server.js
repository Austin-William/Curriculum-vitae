const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/cv-austin'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/cv-austin/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('Running');