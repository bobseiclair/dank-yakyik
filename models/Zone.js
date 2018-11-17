const mongoose = require('mongoose');
const ZoneSchema = new mongoose.Schema({
  name: {type: String, default:''},
  location: {type: [Number]},
  zipCodes: {type: Array, default:[]},
  timestamp:{type: Date, default: Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)
