import { useState, createContext, useContext } from 'react';

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

const FormState = ({ children }) => {
  const [formData, setFormData] = useState();

  const getInformed = (data) => {
    setFormData(data);
  };

  return <FormContext.Provider value={{ getInformed }}>{children}</FormContext.Provider>;
};

export default FormState;
