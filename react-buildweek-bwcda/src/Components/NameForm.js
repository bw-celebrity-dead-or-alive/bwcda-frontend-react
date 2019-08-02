import React, { useState } from 'react'
import Button from './Button'

const NameForm = () => {
  const [playerName, setPlayerName] = useState('')

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  window.localStorage.setItem("SignUpCred", playerName)

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlayerName('')
  }

  return (
    <div className='name-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>
          First name
          <input
            placeholder='first name'
            value={playerName}
            name='firstname'
            onChange={handleChange}
          />
        </label>
        <Button type='submit' buttonText={'SUBMIT'} pathName={'end'} />
      </form>
    </div>
  )
}

export default NameForm
