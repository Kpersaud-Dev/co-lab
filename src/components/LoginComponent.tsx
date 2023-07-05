import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import GoogleButton from 'react-google-button'
import '../SCSS/LoginComponent.scss'

export default function LoginComponent() {
  interface Credentials {
    email: string
    password: string
  }
  const [credentials, setCredentials] = useState<Credentials>({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch(err) {
      console.log(err);
    }
    
  }
  return (
    <React.Fragment>
      <h1 className="colab-logo">Co-Lab</h1>      
      <div className="login-wrapper">
        <h2 className="sign-in-header sign-in-text">Sign In</h2>
        <p className="sign-in-subtext sign-in-text">Start Collaborating Now</p>
        <div className="auth-inputs">
          <input
            onChange={(event) => setCredentials({... credentials, email: event.target.value})}
            className="common-input"
            placeholder='Enter your email'
            type="email"
          />
          <input
            onChange={(event) => setCredentials({... credentials, password: event.target.value})}
            className="common-input"
            placeholder='Enter your password'
            type="password"
          />
        </div>
        <button onClick={login} className="login-btn">Log In to Co-Lab</button>
        <hr className="hr-text" data-content="OR"></hr>
        <div className="google-btn-container">
          <GoogleButton
            className="google-btn"
          />
          <p>New to CoLab? <span className="join-now">Join now</span></p>
        </div>
      </div>   
    </React.Fragment>
    
  )
}
