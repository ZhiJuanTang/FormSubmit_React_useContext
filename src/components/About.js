import AboutForm from './AboutForm';
import DisplayData from './DisplayData';
import { useFormContext } from '../context/FormContext';

import './About.css';

const About = () => {
  const { formData } = useFormContext();

  return (
    <section className='about'>
      <div className='container-content'>
        <div className='about-form-container'>{formData ? <DisplayData /> : <AboutForm />}</div>
        <div className='figure'>
          <h3>Welcome to Europe’s largest call center database</h3>
          <div className='conainer-figure'>
            <div>
              <h1>500+</h1>
              <p>Tenders</p>
            </div>
            <div>
              <h1>200+</h1>
              <p>Callcenter</p>
            </div>
            <div>
              <h1>375.000</h1>
              <p>Agents available</p>
            </div>
            <div>
              <h1>85%</h1>
              <p>Faster sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
