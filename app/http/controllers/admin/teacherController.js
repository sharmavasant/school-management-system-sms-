const Teacher = require('../../../models/teacher')

function teacherController() {
    return {
        index(req, res) {
            return res.render('admin/teacher')
        },

        postTeacher(req, res) {
            const { name, subject, cl, section } = req.body
            //new teacher
            const teacher = new Teacher({
                name,
                subject,
                cl,
                section
            })

            teacher.save().then((teacher) => {
                // Login
                return res.redirect('/admin/teacher')
             }).catch(err => {
                req.flash('error', 'Something went wrong')
                    return res.redirect('/admin/teacher')
             })

        },

        logout(req, res) {
            req.logout()
            return res.redirect('/login')  
          }
    }
}

module.exports = teacherController