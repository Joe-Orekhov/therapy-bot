import React, { useState } from 'react'

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
            <form onSubmit={submitOptionsHandler}>
            <h2>Patient Health Questionnaire</h2>
                <h3 id="title">Is your room currently clean?</h3>
                <select onChange={changeHandler1} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="title">It is important to make your bed everyday?</h3>
                <select onChange={changeHandler2} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="title">Are you feeling nervous, anxious, or on edge?</h3>
                <select onChange={changeHandler3} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>

                <h3 id="title">Feeling down, depressed, or hopeless?</h3>
                <select onChange={changeHandler4} name="selectList" id="selectList">
                    <option value="N/A">Select an option</option>
                    <option value="2">Agree</option>
                    <option value="1">Neutral</option>
                    <option value="0">Disagree</option>
                </select>
                
                <input type="submit" value="START CHAT" />
            </form>
        </div>
    )

}

export default QuestionForm;
