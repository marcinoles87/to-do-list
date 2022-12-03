import React from 'react' 






const Task = ({items},{activ} , {name}) => {

   
const handleRemove = () => {
  
   if(activ === true){

   }
   
}

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  
                  {item.text}
                  {name}
                
                  
                 
                  <button onClick={handleRemove}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;