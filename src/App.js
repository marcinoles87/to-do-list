import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';
import React from 'react'

class App extends React.Component {
  state = { 
    items : [] ,
    text : '' ,
    activ : true ,
   } 

   input = document.querySelector('input');

   handleChange = (e) => {
    this.setState({
      text : e.target.value
      
    })

    console.log(this.state.task)

   }



   handleClick = (e) => {

    e.preventDefault();

    const newItem  = {
      text : this.state.text ,
    };

    this.setState( state => ( {
      items : state.items.concat(newItem) ,
      text : '',
    }))
   

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
        
        <button className='button' onClick={this.handleClick}> Add </button>
        <ul className='list'></ul>

      
      
      </div>
    );
  }
}


 
export default App;




