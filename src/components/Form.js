import { useEffect, useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';

import './Form.css';

const Form = () => {
  const [defaultCountry, setDefaultCountry] = useState();
  const { getInformed } = useFormContext();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const {
          data: { country_code },
        } = await axios.get('http://ipwhois.app/json/');
        setDefaultCountry(country_code);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, []);

  const {
    register,
    handleSubmit,
    control,
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
          className='form-item-input'
          className={errors.company ? 'form-error' : 'form-item-input'}
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
          className={errors.name ? 'form-error' : 'form-item-input'}
          type='text'
          id='name'
          placeholder='Full name'
          {...register('name', { required: 'Name is required', maxLength: { value: 50, message: 'Name cannot exceed 50 characters' } })}
        ></input>
      </div>
      <div className='form-item-react-input'>
        <label htmlFor='phone'>Phone</label>
        <div className={errors.phone ? 'react-input-error' : 'react-input'}>
          <Controller
            name='phone'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <PhoneInput defaultCountry={defaultCountry} international {...field} />}
          />
        </div>
      </div>
      <div className='form-item'>
        <label htmlFor='email'>E-mail</label>
        <input
          className={errors.email ? 'form-error' : 'form-item-input'}
          type='email'
          id='email'
          placeholder='name@mail.com'
          {...register('email', { required: 'email is required' })}
        ></input>
      </div>
      <div className='get-informed-button'>
        <button type='submit'>Get informed</button>
      </div>
    </form>
  );
};

export default Form;
