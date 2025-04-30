const db = require('../db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);

    },

    getById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback)
    },

    create: (user, callback) => {
        db.query('INSERT INTO users(firstname,lastname, email, city) VALUES (?,?,?,?)', [user.firstname, user.lastname, user.email, user.city], callback)
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id =?', [id], callback);
    },

    update: (id, user, callback) => {
        const { firstname, lastname, email, city } = user;
        db.query('UPDATE users SET firstname = ?, lastname = ?, email = ?, city = ? WHERE id = ?', [firstname, lastname, email, city, id], callback);
    }

};

module.exports = User;

