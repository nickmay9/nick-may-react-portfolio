const router = require('express').Router();
const contactRoutes = require('./contact-routes.js');

router.use('/contacts', contactRoutes);

module.export = router;