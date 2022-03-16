import Header from './components/Header';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhySnubes from './components/WhySnubes';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Copywrite from './components/Copywrite';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <HowItWorks />
      <WhySnubes />
      <Partners />
      <Footer />
      <Copywrite />
    </div>
  );
}

export default App;
