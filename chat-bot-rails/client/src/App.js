import React, { useState, useEffect } from 'react'

import { Switch, Route } from 'react-router-dom'
//////////----PAGES----////////////////////////////////
import History from './components/History'
import ChatRoom from './components/ChatRoom'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import QuestionForm from './components/QuestionForm'

function App() {

  const [user, setUser] = useState({username: "", password: ""})
  const [error, setError] = useState("")
  
console.log()
  const Login = details => {
    console.log(details);

    if(details.username == user.username && details.password == user.password) {
      console.log("Logged In");
      setUser({
        username: details.username,
        password: details.password
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({username: "", password: ""});
  }


        {(user == "") ? (
          <div className="welcome-message">
            <h2>Welcome, <span>{user.username}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <div>
            <LoginForm Login={Login} error={error} />
          </div>
        )}

  ////////////////////////////////////////////////////////////////////////////
  // Fetch To Responce
  ////////////////////////////////////////////////////////////////////////////
  const[ userSent, setUserSent ] = useState(false)
  const[ renderChats, setRenderChats] = useState(false)

useEffect(()=>{
    fetch("http://localhost:3000/word_search")
    .then(resp => resp.json())
    .then(data=> console.log(data))
},[userSent])

  return(
    <div className="App">

      <Switch>
        <Route exact path="/"><LoginForm setUser={setUser} user={user} /></Route>
        <Route exact path="/history"><History/></Route>
        <Route exact path="/question-form"><QuestionForm/></Route>
        <Route exact path="/chatRoom"><ChatRoom setUserSent={setUserSent} userSent={userSent} renderChats={renderChats} setRenderChats={setRenderChats}/></Route>
        <Route exact path="/home"><HomePage /></Route>
      </Switch>
      
    </div>
  );
}

export default App;