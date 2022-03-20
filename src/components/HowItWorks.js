import signup from '../assets/signup.png';
import receive from '../assets/receive.png';
import source from '../assets/source.png';

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id='how-it-works'>
      <div className='container-content'>
        <div className='how-it-works-item'>
          <div className='how-it-works-item-img'>
            <img src={signup} alt='Sign up for free' />
          </div>
          <div className='how-it-works-item-text'>
            <h3>Sign up for free</h3>
            <p>Signing up and setting up your project takes less than 5 minutes</p>
          </div>
        </div>
        <div className='how-it-works-item'>
          <div className='how-it-works-item-img'>
            <img src={source} alt='Source smarter' />
          </div>
          <div className='how-it-works-item-text'>
            <h3>Source smarter</h3>
            <p>Our data-based AI and our experts will help you find exactly what you are looking for</p>
          </div>
        </div>
        <div className='how-it-works-item'>
          <div className='how-it-works-item-img'>
            <img src={receive} alt='Recelve offers' />
          </div>
          <div className='how-it-works-item-text'>
            <h3>Receive offers</h3>
            <p>With our insights you always receive high-quality proposals at the best price</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
