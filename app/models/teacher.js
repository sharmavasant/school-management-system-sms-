const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    cl: { type: Array, required: true },
    section: { type: Array, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Teacher', teacherSchema)