import logo from '../assets/snubes-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container-content'>
        <div className='container-header'>
          <img src={logo} className='logo' alt='Snubes logo' />
          <nav>
            <div className='container-nav-m'>
              <div className='toggle'></div>
              <div className='toggle'></div>
              <div className='toggle'></div>
            </div>
            <ul className='container-nav-l'>
              <a>
                <li>About Us</li>
              </a>
              <a href='#how-it-works'>
                <li>How it works</li>
              </a>
              <a>
                <li>Become a Partner</li>
              </a>
              <li>
                <select name='currency' id='currency-select' aria-label='Currency' className='nav-select'>
                  <option value='EUR'>EUR</option>
                  <option value='USD'>USD</option>
                </select>
              </li>
              <li>
                <select name='language' id='language' aria-label='Language' className='nav-select'>
                  <option value='EUR'>EN</option>
                  <option value='USD'>DE</option>
                </select>
              </li>
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
