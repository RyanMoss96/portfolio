import React from 'react';

function About() {
    return (
        <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0'>
            <div className='max-w-full mb-auto space-y-5'>
                <h1 className='text-5xl font-bold md:text-7xl'>Ryan Moss</h1>
                <h2 className='text-xl md:text-xl'>Full Stack Software Engineer.</h2>
                <h3 className='text-l font:thin'>Preston, United Kingdom.</h3>
                <p className='tracking-wide leading-relaxed'>
                    I have over 5 years experience in Full Stack Software Engineering with particular skills in Java Springboot API development and ReactJS UI development. I also have experience in using GO, Kotlin, PostgreSQL, and deploying to Openshift and AWS. Currently available for Freelance work, get in touch using the Contact Form below.
                </p>
            </div>
        </section>
    );
}

export default About;