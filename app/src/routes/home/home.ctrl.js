const index = (req, res) => {
    res.send("/pages/index.vue")
}

const login = (req, res) => {
    res.send("dorf2")
}


module.exports = {
    index,
    login
}