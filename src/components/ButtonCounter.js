// Code Button Componet Here 

import React, {Component} from 'react';

class ButtonCounter extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      count: 0
    }
  }

//   handleClick = () => {
//     // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
//     let newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
//   }

// This works, but React actually provides a built in solution. Instead of passing an object into setState, we can also pass a function. That function, when called inside setState will be passed the component state from when that setState was called. This is typically referred to as the previous state. 

handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }

//   Here, there is no need for a separate variable assignment like let newCount = this.state.count + 1. It is important that we still return an object that was in the same structure as before as the return value of this function becomes the new state.

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ButtonCounter