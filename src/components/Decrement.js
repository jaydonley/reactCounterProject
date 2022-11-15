import React from 'react'

const Decrement = (props) => {
    const {Decrement} = props

    return (
        <div>
            <button onClick = {Decrement}>Decrement By One</button>
        </div>
    )
}

export default Decrement