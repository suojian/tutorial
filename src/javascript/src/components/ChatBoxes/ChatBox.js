import classes from "./ChatBox.module.css";
import Profile from "../UI/Profile";
const ChatBox = (props) =>{ // this is the individual chatbox
    const shortenedMessage = props.message.substring(0,45);
    const chatOnClickHandler = () =>{
        props.setIsChattingWith(props.id);
    }
    return <div className={classes.item} onClick={chatOnClickHandler}>
        <Profile className={classes.profile}/>
        <div>
            <h1 className={classes.name}>{props.name}</h1>
            <p className={classes.message}>{shortenedMessage}</p>
        </div>
        <p className={classes.messageTime}>
            {props.messageTime}
        </p>
    </div>

}
export default ChatBox;