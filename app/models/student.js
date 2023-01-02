const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: { type: String, required: true },
    cl: { type: String, required: true },
    section: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)