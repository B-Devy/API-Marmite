const mongoose = require('mongoose')
const validator = require('validator')

const recetteSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    nbrePers: {
        type: Number,
        required: true
    },
    temps: {
        type: Number,
        required: true
    },
    difficulte: {
        type: String,
        required: true
    },
    cout: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    etape: {
        type: Array,
        required: true
    }, 
    userId: {
        type: String
    },
    imageUrl: {
        type: String
    }
}, { collection: 'recettes' })

module.exports = mongoose.model('Recette', recetteSchema);