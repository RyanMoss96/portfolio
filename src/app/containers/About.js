import react from 'react';

function About() {
    return (
        <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
            {/* <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
                <div className='container' ref={container}></div>
            </div> */}
            <div className='max-w-md mb-auto space-y-5'>
                <h1 className='text-5xl font-bold md:text-7xl'>Ryan Moss</h1>
                <p className='tracking-wide leading-relaxed'>
                    I have over 5 years experience in Software Development working with both APIs and ReactJS UIs. Take a look at my Porfolio to see examples of the work I have done. Use the contact form below to see how I can help take your business online! Prices starting at £299.
                </p>
            </div>
        </section>
    );
}

export default About;