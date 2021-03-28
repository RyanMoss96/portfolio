import { useEffect } from 'react';
import ReactGA from "react-ga";
import About from './containers/About';
import Contact from './containers/Contact';
import Nav from './containers/Nav';
import Portfolio from './containers/Portfolio';
import Skill from './containers/Skills';

const tracking = 'UA-60022979-1';

function App() {
  useEffect(() => {
    ReactGA.initialize(tracking);
  });

  return (
    <div className="App container my-10 mx-auto max-w-screen-lg bg-black">
      <Nav />
      <main>
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
