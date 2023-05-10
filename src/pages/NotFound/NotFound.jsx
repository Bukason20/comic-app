import React from 'react'
import { Error } from '../../assets'
import Found from './NotFound.module.css'  

const NotFound = () => {
  return (
    <div className = {Found.wrapper}>
        <div>
            <img src={Error} alt='error'/>
        </div>
        <div>
            <h1>OOPS!</h1>
            <p>We are sorry, but we can’t find the page you are looking for.</p>
            <div className= {Found.btn}>
            <button>Back to home</button>
            </div>
        </div>
    </div>
  )
}

export default NotFound