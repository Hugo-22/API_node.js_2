const express = require('express')
const router = express.Router()
const { index, show, create, update, remove } = require('./Controller/appartmentController')

// page d'accueil
// router.get('/', index)

// liste des appartements
router.get('/appartments', index)
// affiche un appartment
router.get('/appartments/:id', show)

// ajoute un appartement
router.post('/appartments/', create)

// modifier un appartement
router.put('/appartments/:id', update)

// supprimer un appartement 
router.delete('/appartments/:id', remove)

module.exports = router