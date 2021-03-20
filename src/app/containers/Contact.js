import React from 'react';

function Contact() {
    return (
        <section className='my-28  px-5' id="contact">
            <header className='text-2xl font-bold pt-10'>
                <h2>Get in Touch</h2>
                <p className="text-base font-thin">See how I can help move your business online!</p>
            </header>
            <div className='flex flex-col flex-wrap md:flex-row justify-between'>
                    <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 shadow-lg w-full '>
                        <form className='flex flex-col space-y-3 m-auto w-full' name='contact' method='post'>
                            <input type='hidden' name='form-name' value='contact' />
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' className='gradient' required></input>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' className='gradient' required></input>
                            <label htmlFor='message'>Message</label>
                            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
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