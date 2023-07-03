import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
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
    <div className="login-wrapper">
      <h1>LoginComponent</h1>
      <div className="auth-inputs">
        <input
          onChange={(event) => setCredentials({... credentials, email: event.target.value})}
          className="common-input"
          placeholder='Enter your email'
        />
        <input
          onChange={(event) => setCredentials({... credentials, password: event.target.value})}
          className="common-input"
          placeholder='Enter your password'
        />
      </div>
      
      <button onClick={login} className="login-btn">Log In to Co-Lab</button>
    </div>
  )
}
