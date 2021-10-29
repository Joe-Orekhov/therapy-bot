
function ChatCard({ msg }){

  

function IsUser(msg){
  if(msg.msg.is_user){
    return(
      <div className="userMSG">
        <p>{msg.msg.message}</p>
      </div>
    )
  }else{
    return(
      <div className="robotoMSG">
        <p>{msg.msg.message}</p>
      </div>
    )
  };
};


  return(
    <div id="chatroom-screen">
    
      <IsUser msg={msg}/>
      {/* <h3>ChatCard</h3> */}

    </div>
  )
}

export default ChatCard;
