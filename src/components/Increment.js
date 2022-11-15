import React from 'react'


const Increment = (props) => {
  const {Increment} = props

  return (
    <div>
      <button onClick = {Increment} id='incrementButton'>Increment By One</button>
    </div>
  )
}

export default Increment