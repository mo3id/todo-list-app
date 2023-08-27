import React from "react";
import classes from './InputField.module.css';
const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className={classes['form-group']}>
    {label && <label className={classes.label} htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className={classes['task_input']}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;