
function contactController() {
    return {
        index(req, res) {
            return res.render('contact')
        }
    }
}

module.exports = contactController