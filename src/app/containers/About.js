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
                Etiam leo nibh, aliquet laoreet sapien et, pellentesque consectetur ante. Integer ullamcorper aliquam sem a molestie. In id urna id lacus sagittis sagittis sed sit amet est. Nunc non lobortis ligula. Nulla sed auctor ligula. Proin finibus odio diam, non faucibus odio tempor id. Phasellus egestas nibh lacus, porta cursus enim pretium ut. Aenean cursus neque sit amet mollis condimentum. Suspendisse potenti. Sed ultrices ante in lacus venenatis pulvinar.
                </p>
            </div>
        </section>
    );
}

export default About;