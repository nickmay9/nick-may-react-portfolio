const router = require('express').Router();

require('dotenv').config();

router.get('/', (req, res) => {
    response = {
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.USER_ID
    };
    res.json(response);
});

module.exports = router;