import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';

function QuestionForm() {
    const [ options, setOptions ] = useState({});

    const submitOptionsHandler = e => {
        e.preventDefault();
        console.log(options)
    }
    
    const changeHandler1 = e => {
        setOptions({...options, question1: e.target.value})
    }

    const changeHandler2 = e => {
        setOptions({...options, question2: e.target.value})
    }

    const changeHandler3 = e => {
        setOptions({...options, question3: e.target.value})
    }

    const changeHandler4 = e => {
        setOptions({...options, question4: e.target.value})
    }

    return(
        <div>
            <NavBar />
            <form onSubmit={submitOptionsHandler}>
            <h2 id="questionnaire-title">Patient Health Questionnaire</h2>
                <h3 id="questionnaire-question">Is your room currently clean?</h3>
                <select onChange={changeHandler1} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="questionnaire-question">Is it important for you to make your bed everyday?</h3>
                <select onChange={changeHandler2} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="questionnaire-question">Are you feeling nervous, anxious, or on edge?</h3>
                <select onChange={changeHandler3} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="questionnaire-question">Feeling down, depressed, or hopeless?</h3>
                <select onChange={changeHandler4} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>
                <br />
                <Link to="/chatRoom"><input id="questionnaire-submit" type="submit" value="START CHAT" /></Link>
            </form>
        </div>
    )

}

export default QuestionForm;
