import React from 'react';

function About() {
    return (
        <section className='mt-16 px-5 md:mt-32 flex flex-col flex-wrap space-y-16 md:space-y-0'>
            <div className='max-w-full mb-auto space-y-5'>
                <h1 className='text-5xl font-bold md:text-7xl'>Ryan Moss</h1>
                <h2 className='text-xl md:text-xl'>Full Stack Software Engineer.</h2>
                <h3 className='text-l font:thin'>Preston, United Kingdom.</h3>
                <p className='tracking-wide leading-relaxed'>
                    I have over 5 years experience in Full Stack Software Engineering with particular skills in Java Springboot API development and ReactJS UI development. I also have experience in using GO, Kotlin, PostgreSQL, and deploying to Openshift and AWS. I'm currently available for Freelance work in the following areas:
                </p>
                <ul className='list-disc ml-6'>
                    <li>Website Development</li>
                    <li>Java/Kotlin Development</li>
                    <li>Springboot API Development</li>
                    <li>Web Domain and/or Email Registration</li>
                    <li>Web Hosting Support</li>
                    <li>AWS</li>
                </ul>
            </div>
        </section>
    );
}

export default About;