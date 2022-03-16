import { useFormContext } from '../context/FormContext';
import './DisplayData.css';

const DisplayData = () => {
  const {
    formData: { company, email, isd, name, phone },
  } = useFormContext();
  return (
    <div className='display-data'>
      <div className='display-data-header'>
        <h2>Thank you for your request!</h2>
        <p>You’ve taken the first step. Our experts will get in touch with you soon.</p>
      </div>
      <div className='display-data-body-container'>
        <div className='container-label'>
          <p>Company</p>
          <p>Name</p>
          <p>Phone</p>
          <p>E-mail</p>
        </div>
        <div className='container-data'>
          <h3>{company}</h3>
          <h3>{name}</h3>
          <h3>{phone}</h3>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
