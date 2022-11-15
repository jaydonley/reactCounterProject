import React, { Component } from 'react';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import InputField from './components/InputField';
import Reset from './components/Reset';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }





Increment = () => {
  this.setState(
    {count: this.state.count + 1}
  )
}





Decrement = () => {
  this.setState(
    {count: this.state.count - 1}
  )
}





InputField = (number) => {
  let value = parseInt(number)
  this.setState(
    {count: this.state.count + value}
  )
}




Reset = () => {
  this.setState({
    count: 0
  })
}




render() {
  return(
    <div className="App">

        <div className="container">

          <h4 id="count-output">{this.state.count}</h4>
          
        </div>


      <div className="container-two">

            <Increment Increment={this.Increment} />

            <Decrement Decrement={this.Decrement} />

      </div>


      <div>

            <InputField InputField={this.InputField} />

            <Reset Reset={this.Reset} />

      </div>
    </div>
  )
}
}

export default App


