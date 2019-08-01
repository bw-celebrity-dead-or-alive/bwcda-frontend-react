import React, { useState } from 'react'
import Button from './Button'

const NameForm = () => {
  const [playerName, setPlayerName] = useState('')

  const handleChange = (e) => {
    setPlayerName(e.target.value)
    console.log(playerName)
  }

  window.localStorage.setItem("SignUpCred", playerName)

  const handleSubmit = (e) => {
    console.log('val', e.target.value)
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
