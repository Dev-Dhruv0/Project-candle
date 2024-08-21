import React, { createContext, useContext, useState } from 'react';

// Create context for form data and visibility state
const FormContext = createContext(null);

// Provider component to wrap around the part of the app that needs the context
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContext.Provider value={{ formData, setFormData, showPassword, setShowPassword }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use form context
export const useFormContext = () => useContext(FormContext);
