import classes from "./DefaultButton.module.css";

function DefaultButton(props){
    return (
        <button className={classes.button}>
            {props.buttonLabel}
        </button>
    )
}

export default DefaultButton;