const fs = require('fs').promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data)
        const userInfo = users.filter(val => val.id === id)[0]
        return userInfo ? userInfo : {}
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data)
        if(isAll) return users;
        
        const newUsers = users.map(val => {
            return fields.reduce((newUser, field) => {
                if(Object.hasOwn(val, field)) newUser[field] = val[field];
                return newUser
            }, {})
        })
        
        return newUsers
    }
    
    static async getUsers(isAll, ...fields) {
        const data = await fs.readFile("./src/data/users.json");
        return this.#getUsers(data, isAll, fields);
    }

    static getUserInfo(id) {
        return fs.readFile("./src/data/users.json")
        .then(data => {
            return this.#getUserInfo(data, id)
        })
        .catch(console.error)
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if(users.map(val => val.id).includes(userInfo.id)){
            throw "exist'ed";
        }

        users.push({
            id: userInfo.id,
            name: userInfo.name,
            password: userInfo.password,
        })
        fs.writeFile("./src/data/users.json", JSON.stringify(users))
        return { success: true };

    }
}

module.exports = UserStorage;
