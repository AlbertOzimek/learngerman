import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  strings = ['dog'];
  constructor() {
    super();
    this.state = {};
  }

  onInputChange(e) {
   const value = e.target.value;
   let result;

   if(value === 'der Hund') {
       result = this.strings[0];
       alert('Correct');
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
         {this.strings}
        <div className={"calculator"}>
            <input onChange={this.onInputChange.bind(this)} />
            <div id="result">{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default App;
