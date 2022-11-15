const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body
        const { id, password } = UserStorage.getUserInfo(body.id)
        if(id){
            if(id === body.id && password === body.password){
                return { success: true };
            }
            return { success: false, msg: "notmatched"}
        }
        return { success: false, msg: "noided"}

    }

    register() {
        return UserStorage.save(this.body)
    }
};

module.exports = User;