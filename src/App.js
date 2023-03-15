import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Support from './components/Support'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Contact/>
      <Footer />
    {/* <Router>

    <Routes>
   
      <Route  path='/' element={<Hero/>} />
      <Route  path='/about' element={<About/>} />
       <Route  path='/support' element={<Support/>} />
      <Route  path='/pricing' element={<Pricing/>} />
     
      <Route  path='/contact' element={<Contact/>} />
 
      

    </Routes>
    
      
    </Router> */}
    </>
  );
}

export default App;
