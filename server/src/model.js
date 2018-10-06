const mongoose = require("mongoose")
const moment = require('moment')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

function buildModel(name, schema) {
  return mongoose.model(name, new Schema(schema, {
    timestamps: true
  }))
}
const Folder = buildModel('Folder', {
  name: String,
  description: String,
  shareWith: [{
    kind: String,
    item: { type: ObjectId, refPath: 'shareWith.kind' }
  }],
  parent: { type: ObjectId, ref: 'Folder' },
})

module.exports.Folder = Folder
