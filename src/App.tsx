import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { About } from './sections/About'
import { LiveProjects } from './sections/LiveProjects'
import { UiUx } from './sections/UiUx'
import { Streamlined } from "./sections/StreamLines";


function App() {
  return (
    <main className='bg-background'>


    <div className=" fixed mesh opacity-50 w-[500px] h-[500px] left-[75%] top-[75%] rounded-full md:left-[80%] md:top-[70%] bg-[#009bc1]" />


        
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
  );
}

export default App;
