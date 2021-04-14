const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //main route
    res.render('index.html', {'title': 'Aquarium'});
});

router.get('/crearCuenta', (req, res) => {
    res.render('crearCuenta.html', {'title': 'Crear Cuenta'});
});

router.get('/contact', (req, res) => {//to contact page
    res.render('contact.html', {'title': 'Contact page'});
});

module.exports = router;