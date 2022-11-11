const index = (req, res) => {
    res.send("/pages/index.vue")
}

const login = (req, res) => {
    res.render("home/login")
}


module.exports = {
    index,
    login
}