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

    console.log(this.state.task)

   }



   handleClick = () => {
    console.log('klik')
   }


  render() { 
    const task = this.state.task
    
    return (
      <div>
        <Task value={this.state.task}></Task>
        <input 
              className='input'
              value={task}
              onChange={this.handleChange}>
         </input>
        
        <button className='button' onClick={this.handleClick}>add</button>

      
      
      </div>
    );
  }
}


 
export default App;




