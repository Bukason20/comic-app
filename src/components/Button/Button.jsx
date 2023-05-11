import React from 'react';
import style from "./Button.module.css";


function Button() {
  return (
    <div className={style.ButtonContainer}>
      <button> <a href='#'>Login</a> </button>
    </div>
  )
}

export default Button
