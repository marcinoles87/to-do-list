import React from 'react' 



const Task = (props) => {



   

    return (
       <div>
          
         
          <p>Zadanie : {props.value}</p>
          <ul className='list'>
            <li></li>
          </ul>
       </div>
      );
}
 
export default Task;