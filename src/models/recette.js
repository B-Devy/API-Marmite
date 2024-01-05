const mongoose = require('mongoose')
const validator = require('validator')

const recetteSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    image: {
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
        type: String,
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
    etape: {
        type: Array,
        required: true
    }
}, { collection: 'recettes' })

module.exports = mongoose.model('Recette', recetteSchema);