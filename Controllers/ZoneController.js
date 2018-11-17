const Zone = require("../models/Zone")
module.exports = {

  find: (params, callback) => {
    Zone.find(params, (err, zones) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zones)
    })
  },

  findById: (id, callback) => {
    Zone.findById(id, (err, zone) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  update: (id, params, callback) => {
    Zone.findByIdAndUpdate(id, params, {new: true}, (err, zone) => {
      if (err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  create: (params, callback) => {
    const zips = params['zipCodes']
    const zip = zips.split(',')
    const newZips = []
    zip.forEach(zipC => {
      newZips.push(zipC.trim())
    })
    params['zipCodes'] = newZips

    Zone.create(params, (err, zone) => {
      if (err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  delete: (id, cb) => {
    Zone.findByIdAndRemove(id, (err) => {
      if (err){
        cb(err, null)
        return
      }
      cb(null, null)
    })
  }
};
