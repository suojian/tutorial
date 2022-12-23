import ChatBox from "./ChatBox";
import classes from "./ChatBoxes.module.css"


const ChatBoxes = (props) =>{
    return <div className={classes.chatBoxes} style={props.style}>
            {props.users.map(item =>{
            return <ChatBox key={item.key} id={item.id} setIsChattingWith={props.setIsChattingWith} name={item.name} message={item.recentMessage} messageTime={item.messageTime}/>
            })}
        </div>;
}
export default ChatBoxes;