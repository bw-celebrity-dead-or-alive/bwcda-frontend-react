import React, { useState } from 'react'
import Button from './Button'

const NameForm = () => {
  const [playerName, setPlayerName] = useState('')

  const submitName = (e) => {
    console.log('e', e)
  }

  return (
    <div className='name-form'>
        <form type='submit' value='Submit'>
          <label>
            <input type='text' placeholder='name' />
          </label>
        </form>
      <Button buttonText={'SUBMIT'} name={playerName} submit={submitName} />
    </div>
  )
}

export default NameForm
