
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
      id : Date.now() ,
    };

    this.setState( state => ( {
      items : state.items.concat(newItem) ,
      text : ' ',
    }))
   

   }


  render() { 
    const task = this.state.task
    
    return (
      <div>
        <Task items={this.state.items}></Task>
        <input 
              className='input'
              value={task}
              onChange={this.handleChange}>
         </input>
        
        <button className='button' onClick={this.handleClick}> Add </button>
        

      
      
      </div>
    );
  }
}


 
export default App;




