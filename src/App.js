import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';
import React from 'react'

class App extends React.Component {
  state = { 
    value : '',
    activ : true ,
   } 

   input = document.querySelector('input');



  render() { 

    
    return (
      <div>
        <Task ></Task>
        <input className='input'></input>
        

      
      
      </div>
    );
  }
}


 
export default App;




