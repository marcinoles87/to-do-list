
import './App.css';
import Task from './components/Task.js';
import React from 'react'

class App extends React.Component {
  state = { 
    items : [] ,
    text : '' ,
    activ : true ,
    imie : 'jan'
    
   } 

   

   input = document.querySelector('input');

   handleChange = (e) => {
    this.setState({
      text : e.target.value,
      activ : true
      
    })

    
   }



   handleClick = (e) => {

    e.preventDefault();

    const newItem  = {
      text : this.state.text ,
      id : Date().toString() ,
      activ : false,
    };

    this.setState( state => ( {
      items : state.items.concat(newItem) ,
      text : ' ',
    
    }))
   

   }


  render() { 
    // const task = this.state.text
    
  
    return (
      <div>
        <h1> To Do List - zrob swoja liste</h1>
        <Task 
        items={this.state.items} 
        activ={this.state.activ} 
        name={this.state.imie}> 
        </Task>

        <input 
              className='input'
              value={this.state.text}
              onChange={this.handleChange}>
         </input>
        
        <button className='button' onClick={this.handleClick} > Add </button>
        

      
      
      </div>
    );
  }
}


 
export default App;




