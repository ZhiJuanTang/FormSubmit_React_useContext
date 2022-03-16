import './Form.css';

const Form = () => {
  return (
    <form className='form'>
      <div className='form-item'>
        <lable for='company'>Company</lable>
        <input type='text' name='company' id='company'></input>
      </div>
      <div className='form-item'>
        <lable for='name'>Name</lable>
        <input type='text' name='name' id='name'></input>
      </div>
      <div className='form-item'>
        <lable for='phone'>Phone</lable>
        <span className='phone-input-group'>
          <input type='number' name='isd' id='isd'></input>
          <input type='text' name='phone' id='phone'></input>
        </span>
      </div>
      <div className='form-item'>
        <lable for='email'>E-mail</lable>
        <input type='email' name='email' id='email'></input>
      </div>
      <div className='get-informed-button'>
        <button>Get informed</button>
      </div>
    </form>
  );
};

export default Form;

// const Form = () => {
//   return (
//     <form className='form'>
//       <div className='grid'>
//         <label for='company' className='hhh'>
//           Company
//         </label>
//         <input type='text' name='company' id='company'></input>

//         <label for='name'>Name</label>
//         <input type='text' name='name' id='name'></input>

//         <label for='phone'>Phone</label>
//         <input type='text' name='company' id='company'></input>

//         <label for='email'>E-mail</label>
//         <input type='email' name='email' id='email'></input>
//       </div>
//     </form>
//   );
// };

// export default Form;
