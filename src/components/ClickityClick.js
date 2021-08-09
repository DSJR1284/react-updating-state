// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

//   To update our state, we use this.setState() and pass in an object. This object will get merged with the current state. When the state has been updated, our component re-renders automatically. Handy!
  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
    // console.log(this.state.hasBeenClicked);
  };

//   State changes, however instant they might appear, happen asynchronously. If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state.

//   It's important to note the difference between changes in state and changes in props. Changes in state and/or props will both trigger a re-render of our React component. However, changes in state can only happen internally due to components changing their own state. Thus, a component can trigger changes in its own state.

// A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children.

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
