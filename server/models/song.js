/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  // config = require('../../config/config'),
  Schema = mongoose.Schema;


/**
 * Song Schema
 */
var SongSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  band: {
    type: String,
    default: '',
    trim: true
  },
  desc: {
    type: String,
    default: '',
    trim: true
  },
  label: {
    type: String,
    default: '',
    trim: true
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  hard: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Song', SongSchema);