import { useState, useEffect } from 'react'

function App() {
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

    </div>
  );
}

export default App;