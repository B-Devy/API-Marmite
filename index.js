require('dotenv').config();
const { connectDb } = require('./src/services/mongoose');
//const Recette = require('./src/models/recette');
const stuffRoutes = require('./src/router/routerecette');
const userRoutes = require('./src/router/user');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//connectDb().catch(err => console.log(err));

connectDb()
    .then(app.listen(port, () => {
        console.log(`Le serveur est lancé à http://localhost:${port}`);
    }))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });

app.use(express.json());  ///--- fondamentale pour echanger les models sous forme json avec mongodb
app.use('/recettes', stuffRoutes);
app.use('/auth', userRoutes);

/*
app.get('/recettes', (req, res, next) => {
    Recette.find()
        .then(recette => res.status(200).json(recette))
        .catch(error => res.status(400).json({ error }));
});
*/
/*
app.listen(port, () => {
    console.log(`Le serveur est lancé à http://localhost:${port}`);
});
*/
