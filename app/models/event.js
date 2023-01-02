const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: String, default: 'NA'}
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)