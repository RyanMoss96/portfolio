import React from 'react';

function Nav() {
    return (
        <nav className='container space-x-10'>
            <div>
                <ul className='flex flex-row space-x-10 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
                    <li>
                        <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Portfolio
                    </a>
                    </li>
                    <li>
                        <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Contact
                </a>
                    </li>
                    <li>
                        <a href='./Resume - Theelipan Prabakar.pdf' target='_blank' rel='noreferrer' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Resume
                </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;