/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  //async = require('async'),
  Song = mongoose.model('Song'),
  _ = require('underscore');

/**
 * Find song by id
 */
exports.song = function(req, res, next, id) {
  'use strict';

  Song.findById(id, function(err, song) {
    if (err) {
      return next(err);
    }
    if (!song) {
      return next(new Error('Failed to find song ' + id));
    }
    req.song = song;
    next();
  });
};

exports.all = function(req, res) {
  'use strict';

  Song.find().sort('-created').exec(function(err, songs) {
    if (err) {
      return new Error('cannot get songs, sorry');
    } else {
      res.jsonp(songs);
    }
  });
};

/**
 * Get a song
 */
exports.get = function(req, res) {
  'use strict';

  res.jsonp(req.song);
};

exports.create = function(req, res) {
  'use strict';

  var song = new Song(req.body);

  song.save(function(err) {
    if (err) {
      return new Error('cannot create, sorry');
    } else {
      res.jsonp(song);
    }
  });
};

exports.update = function(req, res) {
  'use strict';

  var song = req.song;

  song = _.extend(song, req.body);
  song.updated = Date.now();

  song.save(function(err) {
    if (err) {
      return new Error('cannot update, sorry');
    } else {
      res.jsonp(song);
    }
  });
};

exports.destroy = function(req, res) {
  'use strict';

  var song = req.song;

  song.remove(function(err) {
    if (err) {
      return new Error('cannot delete, sorry');
    } else {
      res.jsonp(song);
    }
  });
};