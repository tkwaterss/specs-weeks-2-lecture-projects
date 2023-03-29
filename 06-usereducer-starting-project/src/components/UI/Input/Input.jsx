import React from "react";
import styles from './Input.module.css';


const Input = (props) => {
  const {isValid, label, id, type, value, onChange, onBlur} = props;
  return (
    <div
      className={`${styles.control} ${
        isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor="id">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

//contains input divs
//recieves data through props
