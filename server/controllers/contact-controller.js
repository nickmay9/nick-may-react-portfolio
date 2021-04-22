const { Contact } = require('../models');

const contactController = {
    getAllContacts(req, res){
        Contact.find({})
            .select('-__v')
            .then(dbContactData => res.json(dbContactData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getContactById({ params }, res){
        Contact.findOne({ _id: params.id })
            .select('-__v')
            .then(dbContactData => {
                if(!dbContactData){
                    res.status(404).json({ message: 'No contact found with that id.' });
                    return;
                }
                res.json(dbContactData);
            }).catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createContact({ body }, res){
        Contact.create(body)
            .then(dbContactData => res.json(dbContactData))
            .catch(err => res.status(400).json(err));
    },

    updateContact({ params, body }, res){
        Contact.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbContactData => {
                if(!dbContactData){
                    res.status(404).json({ message: 'No contact found with this id.' });
                    return;
                }
                res.json(dbContactData);
            }).catch(err => res.status(400).json(err));
    },

    deleteContact({ params }, res){
        Contact.findOneAndDelete({ _id: params.id })
            .then(dbContactData => {
                if(!dbContactData){
                    res.status(404).json({ message: 'No contact found with this id.' });
                    return;
                }
                res.json(dbContactData);
            }).catch(err => res.status(400).json(err));
    }
};

module.exports = contactController;