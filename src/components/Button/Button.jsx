import style from "./Button.module.css";


function Button({type, value, setButton}) {
  return (

    <div className={style.ButtonContainer}>
      <button type={type}
        onClick={setButton}
        >{value}</button>
    

    </div>
  )
}

export default Button
