import { useState } from "react";

export const useLoginForm = () => {
  const [formDatas, setFormDatas] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!formDatas.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formDatas.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    formDatas,
    setFormDatas,
    errors,
    validate,
  };
};
