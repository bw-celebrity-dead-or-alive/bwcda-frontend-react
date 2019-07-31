import React, { useState } from "react";
import Button from './Button'

const LoginScreen = () => {
  const [loginCred, setloginCred] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setloginCred({ ...loginCred, [e.target.name]: e.target.value })
  }

  return (
    <div className='end-screen'>
      <div className='end-content'>
        <div className='name-form'>
          <form onSubmit=''>
            <label htmlFor='username'>
              Username
          <input
                placeholder='username'
                value={loginCred.username}
                name='username'
                onChange={handleChange}
              />
            </label>
            <label htmlFor='password'>
              Password
          <input
                type="password"
                placeholder='password'
                value={loginCred.password}
                name='password'
                onChange={handleChange}
              />
            </label>
            <Button type='submit' buttonText={'LOGIN'} />
          </form>
        </div></div></div>
  )
}

export default LoginScreen
