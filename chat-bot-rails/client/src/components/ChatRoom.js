import ChatCard from "./ChatCard";
import NavBar from './NavBar'

function ChatRoom({ Login, setUser, user }){

  return(
    <div>
      <NavBar />
      <ChatCard />
    </div>
  )
}

export default ChatRoom;