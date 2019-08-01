import React from 'react'
// import axios from 'axios'
import Button from './Button'

const UserScores = () => {
  // const [games, setUserGames] = useState([])
  // const [playerId, setPlayerId] = useState(5)

  /*
    Store into local data under a UserName Key that is an array of objects, and each time a new game occurs we want to use the spread operator to add another instance of the game and then store it all back into local storage to be pulled out into UserScores.
   */

  // useEffect(() => {
  //example
  //   const token = localStorage.getItem('token') || null;
  //   axios.get('url', {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   axios.post('url', {name: 'krishna', email: 'email@me.com'}, {
  //     headers: {}
  //   })
  // const Axios = axios.create({
  //   header: {
  //     'Authorization': token
  //   }
  // });
  //end example

  //   axios
  //     .get(`https://prod-celebrity-dead-alive.herokuapp.com/api/players/${playerId}/scores`)
  //     .then((res) => {
  //       // console.log(res)
  //       const userGamesArr = res.data
  //         .sort((a, b) => {
  //           return b.score - a.score
  //         })
  //         .slice(0, 10)
  //       setUserGames(userGamesArr)
  //     })
  //     .catch((err) => {
  //       return `Failed to load user's high scores`, err
  //     })
  // }, [])

  let isNameHere = window.localStorage.getItem('SignUpCred')

  let games = JSON.parse(window.localStorage.getItem(isNameHere)) || []

  return (
    <div className='userscores-screen'>
      <header className='userscores-content'>
        <h1>HALL OF FAME</h1>
        <h2>{isNameHere}</h2>
        <div className='grid-titles'>
          <h2>RANK</h2>
          <h2>SCORE</h2>
          <h2>DATE</h2>
        </div>
        <div className='grid-container'>
          <div className='rank-column'>
            {games.map((game, i) => (
              <h3 key={game.score}>{i + 1}</h3>
            ))}
          </div>
          <div className='score-column'>
            {games.map((game) => (
              <h3 key={game.score}>{game.score}</h3>
            ))}
          </div>
          <div className='date-column'>
            {games.map((game) => (
              <h3 key={game.score}>{game['date']}</h3>
            ))}
          </div>
          <div />
        </div>
        <h4>Play again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
      </header>
    </div>
  )
}

export default UserScores
