import { useState, useEffect } from 'react'
import ChatCard from "./ChatCard";
import NavBar from './NavBar'
import QuestionForm from "./QuestionForm";

function ChatRoom({ userSent, setUserSent, setRenderChats, renderChats }){

const [ chats, setChats ] = useState([])
const [ userMsg, setUserMsg ] = useState("")

let userChat = {
  "appointment_id": 1,
  "is_user": true, 
  "message": userMsg
}

//////////////////////---CREATE---////////////////////////////////////////SET TO TRUE IN RETURN
function sendMSG(userChat){
  fetch("http://localhost:3000/chats",{ 
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(userChat)
  })
  .then(resp => resp.json()) 
  .then(data => setUserSent(data)) 
}
////////////////////---DELETE ALL---////////////////////////////
function deleteAllChats(){
  fetch("http://localhost:3000/chats",{
    method: "DELETE",
    header:{
      "Content-type" : "application/json"
    }
  })
  .then(resp => resp.json())
  .then(data =>console.log(data))
}

////////////////////---GET---///////////////////////////////////
useEffect(()=>{
  fetch("http://localhost:3000/chats")
  .then(resp => resp.json())
  .then(data => setChats(data))
},[userSent])

  console.log(userSent)

function handleSubmit(e, userChat){
  e.preventDefault(userChat)
  console.log(userMsg)
  sendMSG(userChat);
  if(userSent){
    setUserSent(false)
  }else{
    setUserSent(true)
  }
};
  return(
    <div id="chatroom-screen">
      <NavBar />
      <h2>ChatRoom</h2>
        {chats.map((msg) =>{
          return(
          <ChatCard msg={msg}/>
          )
      })}
          <form onSubmit={(e)=> handleSubmit(e, userChat)}>
            <input name="userMessage" type="text" onChange={(e)=>setUserMsg(e.target.value)}></input>
            <button>Send</button>
          </form>
          <button onClick={()=> deleteAllChats()}>Delete all</button>
      {/* <QuestionForm /> */}
    </div>
  )
}

export default ChatRoom;