import React, { Component } from 'react'

class InputField extends Component {
    state = {
        count: ""
    }

    handleChange = (e) => {
        this.setState({
            count: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.InputField(this.state.count)
        this.setState({
            count: ''
        })
    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <input type="text"  id='inputArea' onChange={ this.handleChange } value={ this.state.count } /> <br />
                <button>Let's Add This ^ Many</button>
            </form>
        )
    }
}

export default InputField