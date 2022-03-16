import Header from './components/Header';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhySnubes from './components/WhySnubes';
import Partners from './components/Partners';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
