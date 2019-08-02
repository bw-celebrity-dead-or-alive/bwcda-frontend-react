import React, { useState } from 'react'
import Axios from 'axios'
import { BASE_URL } from '../App'

const NameForm = (props) => {
  const [playerName, setPlayerName] = useState('')

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  const sendScoreToDB = async () => {
    try {
      const id = localStorage.getItem('id') || '';
      if(id) {
        await Axios.post(`${BASE_URL}/leaderboard`, {
          player_id: parseInt(id),
          score: props.score
        })
      } else {
      const newPlayer = await Axios.post(`${BASE_URL}/auth/register`, {
        name: playerName,
        email: `default${Date.now()}@deal.com`,
        password: 'default'
      })
      localStorage.setItem('id', newPlayer.data.id)
      await Axios.post(`${BASE_URL}/leaderboard`, {
        player_id: newPlayer.data.id,
        score: props.score
      })
    }
    } catch (error) {
      alert("Couldn't save the score")
      console.log('something went wrong!', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendScoreToDB()
    localStorage.setItem('SignUpCred', playerName)
    setPlayerName('')
  }

  return (
    <div className='name-form'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='firstname'>
            Name
            <input
              placeholder='Your name'
              value={playerName}
              name='firstname'
              onChange={handleChange}
            />
          </label>
          <button type={'submit'}>SUBMIT</button>
        </form>
    </div>
  )
}

export default NameForm
