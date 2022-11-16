import React from 'react'


const Increment = (props) => {
  const {Increment} = props

  return (
    <div>
      <button onClick = {Increment} id='incrementButton'>Lets Add One</button>
    </div>
  )
}

export default Increment