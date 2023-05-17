import style from "./Button.module.css";


function Button({type, value, setButton}) {
  return (

    <div className={style.ButtonContainer}>
      <button type={type}
        value={value}
        onClick={setButton}
        /> 
    

    </div>
  )
}

export default Button
