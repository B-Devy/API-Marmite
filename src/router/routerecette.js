const express = require('express');
const router = express.Router();
const fs = require('fs');
const Recette = require('../models/recette');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config')
//const AWS = require("aws-sdk");
//const s3 = new AWS.S3()

//console.log(s3);
//console.log(process.env.BUCKET)

router.post('/', /*auth,*/ multer, /*async*/ (req, res, next) => {  //--multer est important car c'est lui qui va parser le form-data
    //console.log(req)
    //-------------------
    //console.log(process.env.BUCKET);
    //const recetteObj = req.body;
    //const recetteObj = JSON.parse(req.body.recette);
    const recetteObj = JSON.parse(req.body.data);
    //const recetteObj = req.body;
    //console.log(recetteObj);
    //delete recetteObj._id;
    //delete recetteObj.categorie;
    //console.log(recetteObj);
    console.log(recetteObj)
    
    const recette = new Recette({
        ...recetteObj,
        //userId: "req.auth.userId",
        imageUrl: `https://app-node-deploie-29c6d531db03.herokuapp.com/images/${req.file.filename}`
        //imageUrl: `https://tan-bright-frog.cyclic.app/images/${req.file.filename}`
        //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    });

    console.log(req)
    
    

    recette.save()
        .then(() => { res.status(201).json({message: 'objet enregistré !'}) })
        .catch(error => { res.status(400).json({ error }) })


});

router.put('/:id', /*auth,*/ (req, res, next) => {
Recette.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
});

router.delete('/:id',/* auth,*/ (req, res, next) => {
Recette.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
});

router.get('/', /*auth, */(req, res, next) => {
Recette.find()
    .then(recette => res.status(200).json(recette))
    .catch(error => res.status(400).json({ error }));
});

router.get('/:id',/* auth,*/ (req, res, next) => {
Recette.findOne({ _id: req.params.id })
    .then(recette => res.status(200).json(recette))
    .catch(error => res.status(404).json({ error }));
});

module.exports = router;