import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';
import React from 'react'

class App extends React.Component {
  state = { 
    task : '',
    activ : true ,
   } 

   input = document.querySelector('input');

   handleChange = (e) => {
    this.setState({
      task : e.target.value
    })

   }




  render() { 
    const task = this.state.task
    
    return (
      <div>
        <Task ></Task>
        <input 
              className='input'
              value={task}
              onChange={this.handleChange}>
         </input>
        

      
      
      </div>
    );
  }
}


 
export default App;




