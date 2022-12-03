
import './App.css';
import Task from './components/Task.js';
import React from 'react'

class App extends React.Component {
  state = { 
    items : [] ,
    text : '' ,
    activ : true ,
    data : Date.now() ,
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
      id : Date.now() ,
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
        <Task items={this.state.items} activ={this.state.activ} data={this.state.data} name={this.state.imie}></Task>
        <input 
              className='input'
              value={this.state.text}
              onChange={this.handleChange}>
         </input>
        
        <button className='button' onClick={this.handleClick}> Add </button>
        

      
      
      </div>
    );
  }
}


 
export default App;




