
import './App.css';
import Task from './components/Task.js';
import React from 'react'
import TaskDone from './components/TaskDone';

class App extends React.Component {
  state = { 
    items : [] ,
    text : '' ,
    activ : false ,
    imie : 'jan' ,
    id : '',
    
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
      activ : true,
    };

    this.setState( state => ( {
      items : state.items.concat(newItem) ,
      text : ' ',
      id : Math.floor(Math.random()*100) ,
    
    }))

   

   
    console.log(this.state.items.length)
    console.log(this.state.items)
 
    }


  


  

  render() { 
    // const task = this.state.text
    
  
    return (
      <div>
        <h1> To Do List - zrob swoja liste</h1>
        <Task 
        items={this.state.items} 
        activ={this.state.activ} 
        name={this.state.imie}
        id = {this.state.id}> 
        </Task>

        <input 
              className='input'
              value={this.state.text}
              onChange={this.handleChange}>
         </input>
        
        <button className='button' onClick={this.handleClick} > Add </button>

        
        <div>
        <h1> Wykonane</h1>
        <TaskDone id ={this.state.id}></TaskDone>

        </div>
        

      
      
      </div>
    );
  }
}


 
export default App;




