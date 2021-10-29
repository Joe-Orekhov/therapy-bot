import ChatCard from "./ChatCard";
import NavBar from './NavBar'
import QuestionForm from "./QuestionForm";

function ChatRoom({ Login, setUser, user }){

  return(
    <div>
      <NavBar />
      <QuestionForm />
      <ChatCard />
    </div>
  )
}

export default ChatRoom;