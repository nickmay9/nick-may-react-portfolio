const { Schema, model } = require('mongoose');

const ContactSchema = new Schema(
    {
        contactName: {
            type: String,
            trim: true
        },
        contactEmail: {
            type: String
        },
        contactMessage: {
            type: String
        }
    }
);

const Contact = model('Contact', ContactSchema);

module.exports = Contact;