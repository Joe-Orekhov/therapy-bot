import { useState, useEffect } from 'react'

import React, { Switch, Route } from 'react-router-dom'
//////////----PAGES----////////////////////////////////
import History from './components/History'
import ChatRoom from './components/ChatRoom'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'

function App() {
  const [user, setUser] = useState({username: "", password: ""})
  const [error, setError] = useState("")

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
  
  const user_input = { "user_input" : "I am feeling worse"}


  const [userFeeling, setFeeling ] = useState({})
  const [ Deconstructed_User_Input, setDeconstructed_User_Input] = useState({})


  ////////////////////////////////////////////////////////////////////////////
  // Fetch To Dictionary
  ////////////////////////////////////////////////////////////////////////////

function wordInformation(userInput) {
    fetch("http://localhost:3000/word_search",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(userInput)
  })
    .then(resp => resp.json())
    .then(data=> setDeconstructed_User_Input(data))
  }

  ////////////////////////////////////////////////////////////////////////////
  // feelings Filter
  ////////////////////////////////////////////////////////////////////////////
  function feelingFilter(feels){
    fetch(`http://localhost:3000/feelings/${feels}`)
    .then(resp => resp.json())
    .then(data => setFeeling(data))
};

function handleFeelings(input){
  input.split(' ').forEach(w=>{ 
    feelingFilter(String.raw`${w}`)})
}


function handleSubmit(e){
  e.preventDefault()
  const user_input = { "user_input" : `${e.target.userType.value}`}
  wordInformation(user_input)
  handleFeelings(e.target.userType.value)
}

console.log(Deconstructed_User_Input)
console.log(userFeeling)

  return(
    <div className="App">

    <Switch>
      <Route exact path="/"><LoginForm /></Route>
      <Route exact path="/history"><History/></Route>
      <Route exact path="/chatRoom"><ChatRoom /></Route>
      <Route exact path="/home"><HomePage/></Route>
    </Switch>
      
        

    </div>
  );
}

export default App;