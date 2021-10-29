import { useState, useEffect } from 'react'

import React, { Switch, Route } from 'react-router-dom'
//////////----PAGES----////////////////////////////////
import History from './components/History'
import ChatRoom from './components/ChatRoom'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'

function App() {
  const [user, setUser] = useState(null)
  // const [user, setUser] = useState({username: "", password: ""})

    // if(details.username == user.username && details.password == user.password)
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
    
// if (user) ? (<h2>Welcome, {user.username}!</h2>) : (<Login onLogin={setUser} />)

  }, []);
  
  


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
        <Route exact path="/"><LoginForm setUser={setUser} user={user} /></Route>
        <Route exact path="/history"><History/></Route>
        <Route exact path="/chatRoom"><ChatRoom /></Route>
        <Route exact path="/home"><HomePage /></Route>
      </Switch>
      
    </div>
  );
}

export default App;