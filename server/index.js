var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

// var db = mongoose...
mongoose.connect('mongodb://localhost/fillin');

app.use(express.bodyParser());
// app.use(express.static('./app'));

// Bootstrap models
require('./models/song');

//Bootstrap routes
require('./routes/songs')(app);

app.listen(3210);
console.log('Express server started on port 3210');