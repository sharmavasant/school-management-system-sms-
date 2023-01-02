const Event = require('../../../models/event')

function eventsController() {
    return {
        index(req, res) {
            return res.render('admin/events')
        },

        postEvent(req, res) {
            const { name, time, venue, date} = req.body
            //new event
            const event = new Event({
                name,
                time,
                venue,
                date
            })

            event.save().then((event) => {
                // Login
                return res.redirect('/admin/events')
             }).catch(err => {
                req.flash('error', 'Something went wrong')
                    return res.redirect('/admin/events')
             })

        },

        logout(req, res) {
            req.logout()
            return res.redirect('/login')  
          }
    }
}

module.exports = eventsController