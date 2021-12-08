import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
         <div > 
           <h1 >Hi! Welcome to my first React App </h1>
         </div>
    ); 
   // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi ! Welcome to my first React App!!!'))
  }
}

export default App;
