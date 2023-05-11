import React from 'react';
import style from "./Input.module.css";



function Input() {
  return (
    <div>
        <form>

            <label className={style.LabelItem}>
                Email:
            </label>
            <br />
            <input type='email' name='email'/>

            <label className={style.LabelItem}>
                Password:
            </label>
            <br />
            <input type='password' name='password'/>

        </form>
      
    </div>
  )
}

export default Input
