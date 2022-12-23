import classes from "./InChat.module.css"
import Message from "./Message";
import emoji from "../../assets/emoji.png"
import sendButton from "../../assets/send.png"
import {useRef} from "react";
import back from "../../assets/back.png"

const InChat = (props) =>{
    const inputRef = useRef();
    const messageOnSubmitHandler = (event) =>{
        event.preventDefault();
        if(inputRef.current.value){
            props.sendMessage(inputRef.current.value, props.id);
            inputRef.current.value = '';
        }
    }
    return <div className={classes.container} style={props.style}>
            <div className={classes.header}>
                {props.mobile && <img src={back} className={classes.back} alt="Backward" onClick={props.backwardHandler}/>}
                <div className={classes.username}>{props.name}</div>
                {/* TODO add screen resizing for 1000px devices  */}
                <button className={classes.block}>Block</button>
            </div>
        <div className={classes.messages}>
            <div> {/* extra div to prevent reversing of the content, but scroll to bottom applies */}
                {props.messages.map(item => <Message key={item.id} fromMe={item.fromMe}>{item.content}</Message>)}
            </div>
        </div>
        <form className={classes.writeChat} onSubmit={messageOnSubmitHandler}>
            <img className={classes.emoji} src={emoji} alt="emoji" />
            <input type="text" ref={inputRef} className={classes.writeMessage} placeholder="Type your message here"/>
            <img src={sendButton} alt="send" className={classes.send} onClick={messageOnSubmitHandler} />
        </form>
    </div>
}
export default InChat;