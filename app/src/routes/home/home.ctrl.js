const e = require("express")

const User = require('../../models/User')

const output = {
    index: (req, res) => {
        res.send("/pages/index.vue")
    },
    login: (req, res) => {
        res.render("home/login")
    },
    register: (req, res) => {
        res.render("home/register")
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}



module.exports = {
    output,
    process
}