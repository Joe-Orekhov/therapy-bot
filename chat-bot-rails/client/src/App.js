import { useState, useEffect } from 'react'
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
  
  const user_input = { "user_input" : "I am feeling worse"}

  const [ Deconstructed_User_Input, setDeconstructed_User_Input] = useState({})
  useEffect(()=>{
  fetch("http://localhost:3000/word_search",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(user_input)
  })
.then(resp => resp.json())
.then(data=> setDeconstructed_User_Input(data))
  },[])


console.log(Deconstructed_User_Input)
  // wordSearch(user_input)

  // function respond(word){
  //   if( word === "sad" || word === "bad" || word === "depressed" ){
  //     console.log( `Sorry to hear that you're ${word},`)
  //   }else if( word === "happy" ){
  //     console.log ("Fantastic! What has cuased you to be happy?")
  //   }else 
  //     console.log( "Could you explain?")
  // };

// respond('depressed')
  return(
    <div className="App">
      
        {(user == "") ? (
          <div className="welcome-message">
            <h2>Welcome, <span>{user.username}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
    </div>
  );
}

export default App;