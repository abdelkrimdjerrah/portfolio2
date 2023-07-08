import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { About } from './sections/About'
import { LiveProjects } from './sections/LiveProjects'
import { UiUx } from './sections/UiUx'
import { Streamlined } from "./sections/StreamLines";
import PreLoader from "./components/PreLoader";


function App() {
  return (
    <>
      <PreLoader />
      <main className='bg-background'>        
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
