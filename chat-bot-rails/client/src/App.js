import { useState } from 'react'

function App() {
  // const [ userInput, setUserInput ] = useState(' ')
  // const user_input = { "user_input" : `${userInput}`}

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
      {/* <button  onClick={()=> handleFeelings(userInput)}>test</button> */}
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>Type to Roboto</label>
          <input name="userType" type="text" ></input>
        <button type='submit'> roboto</button>
      </form>
      
    </div>
  );
}

export default App;