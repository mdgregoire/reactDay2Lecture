import React, { Component } from 'react';
import './App.css';
//connect is a function, is changes the props of this component
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      element: '',
      elementArray: []
    };
  }

  handleClick = () => {
    // dispatch needs an Action object, with a key of type
    this.props.dispatch({
      type: 'BUTTON_ONE'
    })
  }

  handleClickTwo = () => {
    // dispatch needs an Action object, with a key of type
    this.props.dispatch({
      type: 'BUTTON_TWO'
    })
  }

  handleAddStar = () => {
    this.props.dispatch({
      type: 'ADD_STAR',
      payload: {
        name: 'Gacrux',
        diameter: 50
      }
    })
  }

  handleChangeFor = (event) => {
    console.log('hi from handleChangeFor');
    this.setState(
      {
        element: event.target.value
      }
    )
  }

  handleSubmit = () => {
    // console.log(this.state.element, 'element');
    // event.preventDefault();
    this.props.dispatch({
      type: 'ADD_ELEMENT',
      payload: this.state.element
    })
    this.setState(
      {
        // elementArray: [...this.state.elementArray, this.state.element],
        element: ''
      }
    )
    console.log('Submit', this.state.element);
  }

  render() {
    console.log(this.state, 'this.state');
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <button onClick={this.handleClick}>Button One!</button>
        <button onClick={this.handleClickTwo}>Button TWO!</button>
        <button onClick={this.handleAddStar}>AddStar!</button>
        {/* add an input for the new element anda new button for a new element
        and pass that string as the payload, use local state for the handler*/}
        <input type="text" placeholder="newElement" onChange={this.handleChangeFor}
        value={this.state.element}/><button onClick={this.handleSubmit}>Submit Element</button>
        <ul>
          {this.state.elementArray.map( (element) => <li key={element}>{element}</li>)}
        </ul>
          {/* next is add a reducer that tracks state */}
          <p>{this.props.reduxState.firstReducer}</p>
      </div>
    );
  }
}
// connect is a function that returns a function that we pass App into
// curry-ing is javascript, you can return other functions with a function,
//

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }

}
export default connect(mapReduxStateToProps)(App);
