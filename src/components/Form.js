import { useFormContext } from '../context/FormContext';
import { useForm } from 'react-hook-form';

import './Form.css';

const Form = () => {
  const { getInformed } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    getInformed(data);
    console.log(data);
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-item'>
        <label htmlFor='company'>Company</label>
        <input
          type='text'
          id='company'
          placeholder='Company'
          {...register('company', {
            required: 'Company name is required',
            maxLength: { value: 80, message: 'Company name cannot exceed 80 characters.' },
            pattern: { value: /^\D*$/, message: 'Company name cannot contain numbers' },
          })}
        ></input>
      </div>
      <div className='form-item'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Full name'
          {...register('name', { required: 'Name is required', maxLength: { value: 50, message: 'Name cannot exceed 50 characters' } })}
        ></input>
      </div>
      <div className='form-item'>
        <label htmlFor='phone'>Phone</label>
        <span className='phone-input-group'>
          <input type='number' id='isd' placeholder='DE' {...register('isd', { required: true })}></input>
          <input
            type='text'
            id='phone'
            placeholder='+49'
            {...register('phone', {
              required: 'Phone number is required',
              pattern: { value: /^[0-9]*$/, message: 'Phone number must only contain numbers' },
            })}
          ></input>
        </span>
      </div>
      <div className='form-item'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' placeholder='name@mail.com' {...register('email', { required: 'email is required' })}></input>
      </div>
      <div className='get-informed-button'>
        <button type='submit'>Get informed</button>
      </div>
    </form>
  );
};

export default Form;
