// var async = require('async');

module.exports = function(app) {
  'use strict';
  //Client Routes
  var songs = require('../api/songs');

  app.all('/songs', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    next();
  });
  app.all('/songs/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    next();
  });

  app.get('/songs', songs.all);
  app.post('/songs', songs.create);
  app.get('/songs/:id', songs.get);
  app.put('/songs/:id', songs.update);
  app.post('/songs/:id', songs.update);
  app.del('/songs/:id', songs.destroy);

  //Finish with setting up the :id param
  app.param('id', songs.song);
};