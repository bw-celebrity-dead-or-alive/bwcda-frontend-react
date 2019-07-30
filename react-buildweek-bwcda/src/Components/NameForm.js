import React, { useState } from 'react'
import Button from './Button'

const NameForm = (props) => {
  const [playerName, setPlayerName] = useState({ firstname: '', lastname: '' })

  const handleChange = (e) => {
    setPlayerName({...playerName, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlayerName({firstname: '', lastname:''})
    console.log(playerName)
    alert(`Thanks ${playerName.firstname}! Your score has been saved!`)
    // history.push('/halloffame')
  }

  return (
    <div className='name-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>
          First name
          <input
            placeholder='first name'
            value={playerName.firstname}
            name='firstname'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='lastname'>
          Last name
          <input
            placeholder='last name'
            value={playerName.lastname}
            name='lastname'
            onChange={handleChange}
          />
        </label>
        {/* <button type='submit'>SUBMIT</button> */}
        <Button type='submit' buttonText={'SUBMIT'} />
      </form>
    </div>
  )
}

export default NameForm
