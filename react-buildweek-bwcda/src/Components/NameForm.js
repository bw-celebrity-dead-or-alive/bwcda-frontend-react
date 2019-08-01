import React, { useState } from 'react'
import Button from './Button'

const NameForm = () => {
  const [playerName, setPlayerName] = useState('')

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //TODO: name input needs to be saved to db
    // console.log(e.target.value)
    setPlayerName('')
    // alert(`Thanks ${playerName.firstname}! Your score has been saved!`)
    window.localStorage.setItem("SignUpCred", (playerName))
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

        <Button type='submit' buttonText={'SUBMIT'} />
      </form>
    </div>
  )
}

export default NameForm
