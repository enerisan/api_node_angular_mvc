const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    })
}

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    User.getById(id, (err, user) => {
        if (err) return res.status(500).send('Erreur serveur');
        if (!user) return res.status(404).send('Utilisateur non trouvé');
        res.json(user);
    });
};

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


exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, email, city } = req.body;

    if (!firstname || !lastname || !email) {
        return res.status(400).send('Nom, prenom et email obligatoires');
    }

    User.update(id, { firstname, lastname, email, city }, (err, result) => {
        if (err) return res.status(500).send('Erreur serveur');
        res.status(200).json({ success: true, message: 'Utilisateur modifié' });
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