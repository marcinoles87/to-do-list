import React from 'react' 


const Task = (props) => {

   this.state = {
      value : 'jjjjj'
   }

   const input = document.querySelector('input');
   
 

  
   
  const  handleOnClick = () =>{
      console.log("dziala");
      
      
   }

    return (
       <div>
          <input className='input' value={value}></input>
          <button className='button' onClick={handleOnClick}>Add</button>
          <p>Zadanie : {this.state.value}</p>
       </div>
      );
}
 
export default Task;