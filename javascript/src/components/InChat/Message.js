import Profile from "../UI/Profile";
import classes from "./Message.module.css"

const Message = (props) =>{
    // TODO custom profile picture
    const currentClass = `${classes.message} ${props.fromMe? classes.fromMe : ''}`;
    const pClass =`${classes.content} ${props.fromMe? classes.pFromMe : classes.pFromOther}`;
    return <div id={props.id} className={currentClass}>
        <Profile className={classes.profile}/>
        <p className={pClass}>
            {props.children}
        </p>
    </div>;
}
export default Message;