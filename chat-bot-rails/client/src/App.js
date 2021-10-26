import { useState } from "react";

function App() {
  const userInput = "cow go boy girl sit"

  // const [ wordsArr, setWordArr] = useState([])
  let newArr = []

  // const arr = userInput.split(' ')
  // arr.forEach(word => wordSearch(word))

  // function wordSearch(word){
  //     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  //     .then(resp=> resp.json())
  //     .then(data =>{
  //       wordConverter(data)
  //       // setWordArr([...wordsArr, data[0].meanings[0].partOfSpeech])
  //   })
  // }

  function wordConverter(word){
    newArr.push(word[0].meanings[0].partOfSpeech)
  }
  console.log(newArr)

  function respond(word){
    if( word === "sad" || word === "bad" || word === "depressed" ){
      console.log( `Sorry to hear that you're ${word},`)
    }else if( word === "happy" ){
      console.log ("Fantastic! What has cuased you to be happy?")
    }else 
      console.log( "Could you explain?")
  };

respond('depressed')
  return(
    <div className="App">

    </div>
  );
}

export default App;