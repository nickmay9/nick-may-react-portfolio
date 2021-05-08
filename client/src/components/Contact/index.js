import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      
    const [formState, setFormState] = useState({ name: '', email: '', message: '', number: '' });
    const { name, email, message, number } = formState;

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function handleChange(event) {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            
            if(!isValid){
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }

    }

    async function handleSubmit(event) {
        event.preventDefault();

        for (let i=0; i<4; i++){
            setFormState({...formState, [event.target[i].name]: event.target[i].value })
        }

        const { service_id, template_id, user_id } = await fetch(`/api/email`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json().then(data => {
                return data;
            }).catch (err => {
                console.log(err);
            })
        });

        const response = await emailjs.send(service_id, template_id,{
            from_name: formState.name,
            reply_to: formState.email,
            message: formState.message,
            number: formState.number,
        }, user_id);

        if (response.status === 200){
            setSuccessMessage('Contact info successfully submitted!');
            for (let i=0; i<4; i++){
                event.target[i].value = '';
            }
        } else {
            setErrorMessage('Something went wrong.');
        }

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
                    <label htmlFor="number">Phone Number</label>
                    <input type="number" name="number" defaultValue={number} />
                </div>
                <div className="styled-input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {successMessage && (
                    <div>
                        <p className="success-text">{successMessage}</p>
                    </div>
                )}
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </section>
    )
}

export default Contact;