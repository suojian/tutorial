import classes from "./TopButton.module.css"
const TopButton = (props) =>{
    let badge=<></>;
    if(props.amount){
        badge = <span className={classes.badge}>{props.amount}</span>;
    }
    return <button className={classes.button} onClick={props.onClick}>
        <span>{props.title}</span>
        {badge}
    </button>
}
export default TopButton;