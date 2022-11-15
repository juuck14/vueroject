const e = require("express")

const UserStorage = require('../../models/UserStorage')

const output = {
    index: (req, res) => {
        res.send("/pages/index.vue")
    },
    login: (req, res) => {
        res.render("home/login")
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        const users = UserStorage.getUsers("id", "password")
        const response = {}
        if(users.some((value) => {
            console.log(value, id, password)
            return value.id === id && value.password === password
        })){
            response.success = true
        } else {
            response.success = false;
            response.msg = "failed"
        }


        return res.json(response)
    }
}



module.exports = {
    output,
    process
}