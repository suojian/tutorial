import ChatBoxes from "./components/ChatBoxes/ChatBoxes";
import {useEffect, useState} from "react";
import SearchBar from "./components/Top/SearchBar";
import TopButton from "./components/Top/TopButton";
import classes from "./App.module.css"
import Profile from "./components/UI/Profile";
import InChat from "./components/InChat/InChat";
import Card from "./components/UI/Card";
import { useMediaQuery } from 'react-responsive';

const DUMMYUSERS=[
  {id: 0,name:"David"},
  {id: 5,name:"Ryan"}
]

const DUMMYCURRENTUSERID = 4;

function App() {
  const [isCheckingNewChats,setIsCheckingNewChats] = useState(true);
  const [isChattingWith,setIsChattingWith] = useState('');
  const [DUMMYMESSAGES, setDUMMYMESSAGES] = useState([
    {id: 12313, sender_id: 0, receiver_id: 4, content:"WWWW", sent_date: new Date("Mar 12 2012 10:00:00 AM"), checked:false},
    {id: 12314, sender_id: 0, receiver_id: 4, content:"WWWW", sent_date: new Date("Mar 12 2012 10:00:01 AM"), checked:false},
    {id: 12315, sender_id: 0, receiver_id: 4, content:"WWWW", sent_date: new Date("Mar 12 2012 10:00:02 AM"), checked:false},
    {id: 12316, sender_id: 5, receiver_id: 4, content:"WWWW", sent_date: new Date("Mar 12 2012 10:00:02 AM"), checked:true},
    {id: 12317, sender_id: 4, receiver_id: 5, content:"WWWW", sent_date: new Date("Mar 12 2012 10:00:02 AM"), checked:false},
  ]); // checked: whether the other user has seen the message or not
  const [NEWDUMMYCHATS,setNEWDUMMYCHATS] = useState([]);
  const [CHECKEDDUMMYCHATS, setCHECKDUMMYCHATS] = useState([]);

  // includes Username
  // and most recent messages, most recent message time
  // TODO userprofile picture, connect to backend, userID

  const queryUsername = (id)=>{ // TODO add backend and database
    for(const i of DUMMYUSERS){
      if(i.id === id){
        return i.name;
      }
    }
    return '';
  }

  useEffect(() =>{
    DUMMYMESSAGES.sort((a,b)=>b.sent_date.getTime() - a.sent_date.getTime()); // should be sorting in reverse
    const checked = new Set();
    let newCheckedChat =[];
    let newNotCheckedChat = [];
    let cnt = 0;
    for(const i of DUMMYMESSAGES){
      if(i.receiver_id === DUMMYCURRENTUSERID){
        const otherID = i.sender_id;
        if(!checked.has(otherID)){
          checked.add(otherID);
          cnt ++;
          if(i.checked){
            newCheckedChat.push({
              key: cnt,
              id: otherID,
              name: queryUsername(otherID),
              recentMessage:i.content,
              messageTime: i.sent_date.toLocaleDateString()
            })
          }else{
            newNotCheckedChat.push({
              key: cnt,
              id: otherID,
              name: queryUsername(otherID),
              recentMessage:i.content,
              messageTime: i.sent_date.toLocaleDateString()
            })
          }
        }
      }
      else if(i.sender_id === DUMMYCURRENTUSERID){
        if(!checked.has(i.receiver_id)){
          checked.add(i.receiver_id);
          cnt ++;
          newCheckedChat.push({
            key: cnt,
            id: i.receiver_id,
            name: queryUsername(i.receiver_id),
            recentMessage:i.content,
            messageTime: i.sent_date.toLocaleDateString()
          })
      }
    }
    setNEWDUMMYCHATS(newNotCheckedChat);
    setCHECKDUMMYCHATS(newCheckedChat);
    }
    }, [DUMMYMESSAGES])
  const notReadOnClickHandler = () =>{
    setIsCheckingNewChats(true);
  }
  const repliedOnClickHandler = () =>{
    setIsCheckingNewChats(false);
  }

  const getMessages = (current_id, checking_id) => {
    let res =[];
    for (const i of DUMMYMESSAGES){
      if((i.sender_id === current_id && i.receiver_id===checking_id) || (i.receiver_id === current_id && i.sender_id===checking_id)){
        res.push({
          id:i.id,
          content:i.content,
          sent_date:i.sent_date,
          fromMe: i.sender_id === current_id,
        });
      }
    }
    res.sort((a,b)=>a.sent_date.getTime() - b.sent_date.getTime());
    return res;
  }
  const sendMessageHandler = (message, receiver) =>{
    setDUMMYMESSAGES((prevState)=>{
      return prevState.concat({
        id:prevState[0].id + 1,
        sender_id: DUMMYCURRENTUSERID,
        receiver_id:receiver,
        checked: false,
        sent_date: new Date(),
        content: message
      });
    })
  }
  const backwardHandler = () =>{
    setIsChattingWith('');
  }
  const mobile = useMediaQuery({ query: `(max-width: 768px)` });
  const users = isCheckingNewChats ? NEWDUMMYCHATS : CHECKEDDUMMYCHATS;
  const chattingUsername = queryUsername(isChattingWith);
  let nowDisplaying = <></>
  if(mobile && isChattingWith.length!==0) {
     nowDisplaying = <InChat mobile={true} backwardHandler={backwardHandler} name={chattingUsername} style={{width: "100%"}} id={isChattingWith} messages={getMessages(DUMMYCURRENTUSERID, isChattingWith)}
                sendMessage={sendMessageHandler}/>
  }
  if(!mobile){
    nowDisplaying = chattingUsername.length !== 0 ?
        <InChat name={chattingUsername} id={isChattingWith} messages={getMessages(DUMMYCURRENTUSERID, isChattingWith)}
                sendMessage={sendMessageHandler}/> :
        <InChat name={"Click on a chat to start!"} id={0} messages={[]} sendMessage={() => {
        }}/>
  }
  let displayChat = <></>;
  if(mobile && isChattingWith.length===0){
      displayChat =<ChatBoxes users={users} style={{width:"97%"}} setIsChattingWith={setIsChattingWith}/>;
  }
  if(!mobile){
    displayChat = <ChatBoxes users={users} setIsChattingWith={setIsChattingWith}/>;
  }
  return <>
    <p className={classes.title}>Message Center</p>
      <SearchBar/>
      <Profile className={classes.profile}/>
      <div className={classes.buttons}>
        <TopButton title="Not Read" amount={NEWDUMMYCHATS.length} onClick={notReadOnClickHandler}/>
        <TopButton title="Replied" onClick={repliedOnClickHandler}/>
      </div>
        <Card className={classes.container}>
          {displayChat}
          {nowDisplaying}
        </Card>
  </>
}

export default App;
