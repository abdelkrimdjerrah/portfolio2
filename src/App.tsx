import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { About } from './sections/About'

function App() {
  return (
    <main className='bg-background'>
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">
          <About />
          <Skills />
          <Contact />
        </div>
    </main>
  );
}

export default App;
