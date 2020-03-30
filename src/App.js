import React, { Component } from 'react';

import './App.css';
import RockScissorsPaperContainer from './containers/RockScissorsPaperContainer'; // **** (1) 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        <RockScissorsPaperContainer /> 
      </div>
    );
  }
}

export default App;