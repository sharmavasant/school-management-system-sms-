const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const formController = require('../app/http/controllers/admin/formController')
const teacherController = require('../app/http/controllers/admin/teacherController')
const adminController = require('../app/http/controllers/admin/adminController')


//middlewares
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app){
    app.get('/', homeController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    //admin routes
    app.get('/admin/student', admin, formController().index)
    app.post('/admin/student', admin, formController().postStudent)
    app.get('/admin/teacher', admin, teacherController().index)
    app.post('/admin/teacher', admin, teacherController().postTeacher)
    app.post('/logout', admin, formController().logout)

    app.get('/admin', adminController().index)
}



module.exports = initRoutes