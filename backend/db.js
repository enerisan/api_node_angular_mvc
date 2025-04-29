const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sani',
    database: 'test'
});


db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion Mysql : ', err);
        process.exit(1);
    } else {
        console.log('Connecté à MySQL');
    }
});

module.exports = db;