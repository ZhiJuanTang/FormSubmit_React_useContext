import signup from '../assets/signup.png';
import receive from '../assets/receive.png';
import source from '../assets/source.png';

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className='how-it-works'>
      <div className='container-content container-grid'>
        <div className='item'>
          <img src={signup} />
          <h3>Sign up for free</h3>
          <p>Signing up and setting up your project takes less than 5 minutes</p>
        </div>
        <div className='item'>
          <img src={source} />
          <h3>Source smarter</h3>
          <p>Our data-based AI and our experts will help you find exactly what you are looking for</p>
        </div>
        <div className='item'>
          <img src={receive} />
          <h3>Receive offers</h3>
          <p>With our insights you always receive high-quality proposals at the best price</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
