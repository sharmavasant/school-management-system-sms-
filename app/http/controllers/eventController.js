const Event = require('../../models/event')

function eventController() {
    return {
        async index(req, res) {
            const events = await Event.find()
            return res.render('users/event', {events: events})
        }
    }
}

module.exports = eventController