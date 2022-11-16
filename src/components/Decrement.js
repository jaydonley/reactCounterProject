import React from 'react'

const Decrement = (props) => {
    const {Decrement} = props

    return (
        <div>
            <button onClick = {Decrement}>Let's Subtract One</button>
        </div>
    )
}

export default Decrement