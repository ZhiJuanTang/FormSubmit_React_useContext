import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import reward from '../assets/best-of-internet-service.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-content'>
        <div className='container-footer'>
          <div className='reward'>
            <img src={reward} alt='Sign of Innovationspreis-IT Inter Service 2018' />
          </div>
          <ul className='footer-item'>
            <li>About us</li>
            <li>Become a Partner</li>
            <li>FAQ</li>
          </ul>
          <ul className='footer-item'>
            <li>Imprint</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className='footer-item'>
            <li>support@snubes.com</li>
            <li>+49 (0) 305 5645327</li>
            <li>
              <span>
                <ImFacebook />
              </span>
              <span>
                <ImTwitter />
              </span>
              <span>
                <ImLinkedin2 />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
