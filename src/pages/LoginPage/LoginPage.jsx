import React from 'react';
import InputBar from "../../components/Input/Input";
import ButtonBar from "../../components/Button/Button";
import { Logo } from '../../assets'
import style from "./LoginPage.module.css";




function LoginPage() {
  return (
    <div className={style.MainContainer}>

      <div className={style.LogoContainer}>
        <img src={ Logo } alt= 'logo' />
      </div>

      <div className={style.LoginContainer}>

        <div className={style.TextContainer}>
          <h1>LOGIN TO JOIN THE HEROS</h1>
        </div>

        <div className={style.InputContainer}>
          <div className={style.InputPage}>
            <form>
              <label className={style.LabelItem}>
                Email:
              </label>
              <InputBar type={"email"}  />

              <br />

              <label className={style.LabelItem}>
                Password:
              </label>
              <InputBar type={"password"}  />

              <ButtonBar />
            </form>
      
            <div className={style.LoginFooter}>
              <div className={style.account}>
                Don't have an account? <span>Sign up</span> 
              </div>

              <div className={style.forgotPword}>
                <span>
                Forgot Password?
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default LoginPage
