const Student = require('../../../models/student')

function formController() {
    return {
        index(req, res) {
            return res.render('admin/student')
        },

        postStudent(req, res) {
            const { name, cl, section} = req.body
            //new student
            const student = new Student({
                name,
                cl,
                section
            })

            student.save().then((student) => {
                // Login
                return res.redirect('/admin/student')
             }).catch(err => {
                req.flash('error', 'Something went wrong')
                    return res.redirect('/admin/student')
             })

        },

        logout(req, res) {
            req.logout()
            return res.redirect('/login')  
          }
    }
}

module.exports = formController