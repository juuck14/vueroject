
class UserStorage {
    static #users = [
        { id: "q", password: "123", name: "qqq" },
        { id: "w", password: "123", name: "www" },
        { id: "e", password: "qwe123", name: "eee" },
        { id: "r", password: "qwe123!@#", name: "rrr" },
    ];



    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = users.map(val => {
            return fields.reduce((newUser, field) => {
                if(Object.hasOwn(val, field)) newUser[field] = val[field];
                return newUser
            }, {})
        })

        return newUsers
    }
}

module.exports = UserStorage;
