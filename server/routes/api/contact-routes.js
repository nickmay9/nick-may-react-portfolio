const router = require('express').Router();
const {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require('../../controllers/contact-controller');

router.route('/')
    .get(getAllContacts)
    .post(createContact);

router.route('/:id')
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;