const baseDeDonneesTemp = [
    {
        titre: "Boeuf bourguignon",
        image: "superbbf.jpg",
        ingredients: ["sel & poivre", "2x cuillière defarine", "2x oignon", "60cl de vin rouge", "50g de beurre", "100g de lardons", "800g de boeuf", "1 gousse d'ail", "1x bouquet garni", "250g de champignons de Paris"],
        nbrePers: 6,
        temps: "1h10",
        difficulte: "Facile",
        cout: "Moyen",
        etape: [
            "Hacher les oignons. Peler l'ail.",
            "Dans une cocotte minute, faire roussir la viande et les lardons dans l’huile ou le beurre.",
            "Ajouter les oignons, les champignons égouttés et saupoudrer de fariner. Mélanger et laisser dorer un instant.",
            "Mouiller avec le vin rouge qui doit recouvrir la viande.",
            "Saler et poivrer.",
            "Ajouter l’ail et le bouquet garni.",
            "Fermer la cocotte minute.",
            "Laisser cuire doucement 60 min à partir de la mise en rotation de la soupape"
        ]
    },
    {
        titre: "Pâte à crêpes",
        image: "supercrpf.jpg",
        ingredients: ["90g beurre fondu", "75g de sucre en poucre", "3 pincées de sel", "375g de farine tamisée", "6x oeufs", "1l de lait", "rhum grand-marnier"],
        nbrePers: 5,
        temps: "10 min",
        difficulte: "Très Facile",
        cout: "Faible",
        etape: [
            "Dans un saladier, mélanger la farine, le sel et le sucre.",
            "Faire une fontaine.",
            "Ajouter les oeufs et commencer à les incorporer à la farine avec une cuillère en bois, ajouter le beure fondu (tiédi) peu à peu et bien malaxer.",
            "Incorporer le lait (par petites quantités au début pour éviter les grumeaux), ajouter le parfum.",
            "Faire cuire les crêpes dans une poêle chaude huilée."
        ]
    },
    {
        titre: "Croque-Monsieur",
        image: "supercroc.jpg",
        ingredients: ["sel & poivre", "muscade", "50g de beurre", "8x tranches de jambon", "100g de gruyère", "8x tranches de toastinette"],
        nbrePers: 3,
        temps: "15 min",
        difficulte: "Très Facile",
        cout: "Bon Marché",
        etape: [
            "Beurrez les 8 tranches de pain de mie sur une seule face. Posez 1 tranche de fromage sur chaque tranche de pain de mie. Posez 1 tranche de jambon plié en deux sur 4 tranches de pain de mie. Recouvrez avec les autres tartines (face non beurrée au dessus).",
            "Dans un bol mélanger le fromage râpé avec le lait, le sel, le poivre et la muscade.",
            "Répartissez le mélange sur les croque-monsieur.",
            "Placez sur une plaque au four sous le grill pendant 10 mn."
        ]
    },
]

module.exports = {     ///----Attention bien mettre les "{" sinon undefined !
    baseDeDonneesTemp
};
