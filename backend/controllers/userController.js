const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    })
}

exports.createUser = (req, res) => {
    const { firstname, lastname, email, city } = req.body;
    if (!firstname || !lastname || !email) {
        return res.status(400).send('Nom, prenom et email obligatories');
    }

    User.create({ firstname, lastname, email, city }, (err, result) => {
        if (err) {
            return res.status(500).send('Erreur serveur');

        }
        res.status(201).json({ id: result.insertId, firstname, lastname, email, city });
    });
};

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    User.delete(id, (err, result) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.sendStatus(204);
    })
}