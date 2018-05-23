import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onInputChange(e) {
   const val = e.target.value;
   const parts = val.match(/(\d+)(\+)(\d+)/);
   const left = parseInt(parts[1]); 
   const operator = parts[2];
   const right = parseInt(parts[3]);
   let result;
   if(operator === '+') {
     result = left + right;
   }
   this.setState({result});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Learn German</h1>
        </header>
        <p className="App-intro">
          With us you will lear german
        </p> 

        <div> 
            <input onChange={this.onInputChange.bind(this)} />
            <div id="result">{this.state.result}</div>
        </div>

      </div>
    );
  }
}

export default App;
