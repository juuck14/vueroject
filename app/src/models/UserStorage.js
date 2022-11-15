const db = require('../config/db')
class UserStorage {
    static getUserInfo(id) {
        return new Promise((res, rej) => {
            const query = "SELECT * FROM users WHERE id = ?";
            db.query(query, [id], (err, data) => {
                if(err) rej(`${err}`)
                res(data[0] ? data[0] : {})
            })
        })
    }

    static async save(userInfo) {
        return new Promise((res, rej) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?)";
            db.query(
                query, 
                Object.values(userInfo), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    res({ success: true })
                }
            )
        })
    }
}

module.exports = UserStorage;
