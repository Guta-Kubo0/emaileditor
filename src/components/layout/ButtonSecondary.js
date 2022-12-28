import classes from "./ButtonSecondary.module.css";

function ButtonSecondary(props){
   return(
    <button className={classes.button}>
        {props.buttonLabel}
    </button>
   )
}

export default ButtonSecondary;