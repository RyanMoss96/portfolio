import React from 'react';

const Skill = () => {
  return (
    <section className='mb-28 px-5' id="skills">
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Java'>
          <img src='./images/java.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Java
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Springboot'>
          <img src='./images/spring.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Springboot
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Typescript'>
          <img src='./images/typescript.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Typescript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='ReactJS'>
          <img src='./images/reactjs.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          ReactJS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='golang'>
          <img src='./images/go_white.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          golang
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Kotlin'>
          <img src='./images/kotlin.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Kotlin
        </div>
      </div>
    </section>
  );
};

export default Skill;