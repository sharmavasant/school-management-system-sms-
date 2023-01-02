const Student = require('../../models/student')
const Teacher = require('../../models/teacher')

function dashController() {
    return {
        async index(req, res) {
            const students = await Student.find()
            const teachers = await Teacher.find()
            return res.render('users/user', { students: students, teachers: teachers})
        }
    }
}

module.exports = dashController