const express = require('express');
const Recette = require('../models/recette');
const auth = require('../middlewares/auth');
const router = express.Router();


router.post('/', auth, async (req, res, next) => {
    const recette = new Recette({
        ...req.body
      });
    await recette.save()
        .then(() => res.status(201).json(recette))
        .catch(error => res.status(400).json({ error }));
});

router.put('/:id', auth, (req, res, next) => {
Recette.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
});

router.delete('/:id', auth, (req, res, next) => {
Recette.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
});

router.get('/', auth, (req, res, next) => {
Recette.find()
    .then(recette => res.status(200).json(recette))
    .catch(error => res.status(400).json({ error }));
});

router.get('/:id', auth, (req, res, next) => {
Recette.findOne({ _id: req.params.id })
    .then(recette => res.status(200).json(recette))
    .catch(error => res.status(404).json({ error }));
});

module.exports = router;