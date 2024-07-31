import './App.css';
import React from 'react';
import Header from './components/Header';
import Comp from './Comp';

class App extends React.Component {
  state = {
    name: 'Sanjeev Kumar',
    count: 0
  }

  inc = () => this.setState((prevstate) => ({ count: prevstate.count + 1 }))
  componentDidMount () {
    console.log("Component Created");
  }


  render() {
    return (
      <>
        <Header />
        <div className='main'>
          <h1>React JS Component</h1>
          <h1>Name: {this.state.name}</h1>
          <h1>Count: {this.state.count}</h1>
          <button id='btn' onClick={this.inc}>Click me</button>
        </div>
      </>
    );
  }
}

export default App;
