import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [credentials, setCredentials] = useState({
      username: '',
      password: ''
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
        [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios 
    .post('http://localhost:5000/api/login', credentials)
    .then( res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload)
      this.props.history.push('/friends')
    })
    .catch(err => {
      console.log('error', err.message)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="username" 
          onChange={handleChange} 
          value={credentials.username}
        />

        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          onChange={handleChange} 
          value={credentials.password} 
        />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login
