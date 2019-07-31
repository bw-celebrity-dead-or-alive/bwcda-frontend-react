import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  let text = props.buttonText
  let path = props.pathName

  return (
    <div className='button'>
      <button><Link to={`/${path}`} >{text}</Link></button>
    </div>
  )
}
export default Button
