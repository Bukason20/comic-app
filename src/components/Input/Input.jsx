import React from 'react';
import style from "./Input.module.css";



function Input({type, placeholder, value, setInput}) {
  return (
    <div>
  
      <input className={style.inputItem}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setInput}
      />   
      
    </div>
  )
}

export default Input
