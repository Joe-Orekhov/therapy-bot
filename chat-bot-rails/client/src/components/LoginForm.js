import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm({ setUser, user }) {

const submitHandler = e => {
    e.preventDefault();

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        })
          .then(resp => resp.json())
          .then(user => console.log(user));
    }
    
    const detailsUsernameHandler = e => {
        setUser({...user, username: e.target.value})
    }

    const detailsPasswordHandler = e => {
        setUser({...user, password: e.target.value})
    }

    return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
            <div className="form-group" onChange={detailsUsernameHandler}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="form-group" onChange={detailsPasswordHandler}>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <Link to="/home"><input type="submit" value="LOGIN" /></Link>
        </div>
      </form>
    )
}

export default LoginForm;