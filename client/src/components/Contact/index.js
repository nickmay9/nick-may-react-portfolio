import React, { useState } from 'react';
import './contact.css'

function Contact() {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        const isValid = validateEmail(event.target.value);
        
        if(!isValid){
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }

        if(!errorMessage){
            setFormState({...formState, [event.target.name]: event.target.value });
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contactMe" className="sectionMargin">
            <div className="contactTitle title">
                <h1>Contact Me</h1>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="styled-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} />
                </div>
                <div className="styled-input">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="styled-input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" defaultValue={message} />
                </div>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </section>
    )
}

export default Contact;