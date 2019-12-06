import React, { useState } from 'react'

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
          type="text" 
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
