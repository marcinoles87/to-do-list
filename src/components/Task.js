import React from 'react' 



const Task = (props) => {

   const inputValue = document.querySelector('input')

  const  handleOnClick = () =>{
     
   

      
      
   }

   

    return (
       <div>
          
          <button className='button' onClick={handleOnClick}>Add</button>
          <p>Zadanie : {props.value}</p>
       </div>
      );
}
 
export default Task;