
function adminController() {
    return {
        index(req, res) {
            return res.render('admin/admin')
        }
    }
}

module.exports = adminController