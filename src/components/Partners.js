import forward from '../assets/forward.png';
import backward from '../assets/backward.png';
import allianz from '../assets/allianz.png';
import creditshelf from '../assets/creditshelf.png';
import usercentrics from '../assets/usercentrics.png';
import laserhub from '../assets/laserhub.png';
import talixo from '../assets/talixo.png';
import './Partners.css';

const Partners = () => {
  return (
    <section id='partners'>
      <div className='container-content'>
        <img />
        <div className='quote'>
          <img src={backward} className='nav-key' alt='backward key' />
          <blockquote>
            Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way.
            After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching
            partner. Thank you for your great support, which has helped us a lot in the selection process.
          </blockquote>
          <img src={forward} className='nav-key' alt='forward key' />
        </div>
        <address className='author'>
          <b>Jan Brenneke,</b> VP Operations
        </address>
        <div className='pagination'></div>
        <div className='partners-logo'>
          <img src={allianz} alt='Allianz sign' />
          <img src={creditshelf} alt='Creditshelf sign' />
          <img src={usercentrics} alt='User centrics sign' />
          <img src={laserhub} alt='Laser hub sign' />
          <img src={talixo} alt='Talixo sign' />
        </div>
      </div>
    </section>
  );
};

export default Partners;
