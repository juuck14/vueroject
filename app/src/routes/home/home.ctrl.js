
const users = [
    { id: "q", password: "123" },
    { id: "w", password: "123" },
    { id: "e", password: "qwe123" },
    { id: "r", password: "qwe123!@#" },
]

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

        if(users.some((value) => {
            console.log(value, id, password)
            return value.id === id && value.password === password
        })){
            return res.json({
                success: true,
            });
        }

        return res.json({
            success: false,
            msg: "fail'ed"
        })
    }
}



module.exports = {
    output,
    process
}