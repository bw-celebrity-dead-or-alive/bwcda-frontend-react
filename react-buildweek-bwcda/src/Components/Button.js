import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  let text = props.buttonText
  let path = props.pathName

  return (
    <div className='button'>
      <Link to={`/${path}`}>
        <button>{text}</button>
      </Link>
    </div>
  )
}
export default Button
