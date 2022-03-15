import logo from '../assets/snubes-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container-content'>
        <div className='container-header'>
          <img src={logo} className='logo' />
          <nav>
            <ul className='container-nav'>
              <a>
                <li>About Us</li>
              </a>
              <a>
                <li>How it works</li>
              </a>
              <a>
                <li>Become a Partner</li>
              </a>
              <a>
                <li>EUR</li>
              </a>
              <a>
                <li>EN</li>
              </a>
              <a>
                <li>Sign In</li>
              </a>
              <a>
                <li>Get Access</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
