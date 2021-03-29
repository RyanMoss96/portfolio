import React, { useState } from 'react';
import Amplify, { API } from "aws-amplify";
import aws_exports from "../../aws-exports";
// import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const submitContactForm = event => {
        event.preventDefault();

        const contactMessage = {
            body: {
                name,
                email,
                message
            }
        };

        API.post('portfolioApi', '', contactMessage)
            .then(response => setResponse('Thank you for your message! I will be in touch soon!'))
            .catch(error => setResponse('There seems to be an issue with my contact form! Please try again or email me directly at mail@ryanmoss.co.uk'));
    };

    return (
        <section className='my-28  px-5' id="contact">
            <header className='text-2xl font-bold pt-10'>
                <h2>Get in Touch</h2>
                {response &&
                    <p className="text-base font-thin">{response}</p>
                }
            </header>
            <div className='flex flex-col flex-wrap md:flex-row justify-between'>
                <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 shadow-lg w-full '>
                    <form className='flex flex-col space-y-3 m-auto w-full' name='contact' onSubmit={submitContactForm}>
                        <input type='hidden' name='form-name' value='contact' />
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' className='gradient' onChange={event => setName(event.target.value)} required></input>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' className='gradient' onChange={event => setEmail(event.target.value)} required></input>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='message' cols='25' rows='5' className='gradient' onChange={event => setMessage(event.target.value)} required></textarea>
                        <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;