import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  let text = props.buttonText
  let path = props.path

  return (
    <div className='buttons'>
      <button><Link to={`/${path}`} >{text}</Link></button>
    </div>
  )
}
export default Button
