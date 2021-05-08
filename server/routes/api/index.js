const router = require('express').Router();
const emailRoutes = require('./email-routes');

//add prefix of /pizzas to routes created in pizza-routes
router.use('/email', emailRoutes);

module.exports = router;