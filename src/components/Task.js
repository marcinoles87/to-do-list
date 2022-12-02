import React from 'react' 



const Task = ({items}) => {

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  {item.text}
                  <button>done</button>
                  <button>remove</button>
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;