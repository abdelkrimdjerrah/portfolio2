import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { About } from './sections/About'
import { LiveProjects } from './sections/LiveProjects'
import { UiUx } from './sections/UiUx'
import { Streamlined } from "./sections/StreamLines";
import PreLoader from "./components/PreLoader";
import { useRef, useState } from "react";


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const appRef = useRef(null);
  
  return (
    <>
      <PreLoader isLoaded={isLoaded}/>
      <main className='bg-background' ref={appRef} onLoad={() => setIsLoaded(true)}>        
          <Hero />
          <div className="relative z-10 w-full overflow-x-clip">
            <About />
            <Skills />
            <LiveProjects />
            <UiUx />
            <Streamlined />
            <Contact />
          </div>
      </main>
    
    </>
  );
}

export default App;
