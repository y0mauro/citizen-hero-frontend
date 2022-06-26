import { createContext, useState } from "react";

const FormContext = createContext();
export function FormProvider({ children }) {
  const [values, setValues] = useState({
    role: "parent",
    location: "",
    reason: "",
    contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleRoleInputChange = (event) => {
    setValues({ role: event.target.value });
  };

  const handleLocationInputChange = (event) => {
    setValues({ ...values, location: event.target.value });
  };
  const handleReasonInputChange = (event) => {
    setValues({ ...values, reason: event.target.value });
  };

  const handleContactWayInputChange = (event) => {
    setValues({ ...values, contact: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <FormContext.Provider
      value={{
        values,
        setValues,
        submitted,
        setSubmitted,
        handleRoleInputChange,
        handleLocationInputChange,
        handleReasonInputChange,
        handleContactWayInputChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;
