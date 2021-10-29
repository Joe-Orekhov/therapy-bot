import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function HomePage({ user }){

  return(
    <div>
      <NavBar />
      <div className="welcome-message">
        <h2>Roboto: Welcome! I'm here to help.</h2>
        <br /><br />
        <h3>Please fill out a <span><Link to="/question-form"><button id="questionnaire-submit">simple questionnaire</button></Link></span> before each chat appointment. 
        <br /><br />This is a safe place to process your feelings: negative, neutral and positive feelings are welcome.
        <br /><br /><br />No judgement here. <br /><br />**PERKS OF TALKING TO A ROBOT**<br /><br /><span id="cursor-blink-1">└[∵┌] </span><span id="cursor-blink-2"> └[ ∵ ]┘ </span><span id="cursor-blink-3"> [┐∵]┘</span></h3>
        
      </div>
    </div>
  )
}

export default HomePage;