const db = require('../db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);

    },
    create: (user, callback) => {
        db.query('INSERT INTO users(firstname,lastname, email, city) VALUES (?,?,?,?)', [user.firstname, user.lastname, user.email, user.city], callback)
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id =?', [id], callback);
    }

};

module.exports = User;

