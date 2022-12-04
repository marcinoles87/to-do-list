import React from 'react' 


const Task = (props ,{items} ) => {

   
const handleRemove = () => {
  
 
   
}

console.log(props.name)

    return (
       <div>
         <ul>
           
            {items.map(item => (
               <li key={item.id}>
                  
                  {item.text}
                  
                {props.name}
                  
                 
                  <button onClick={handleRemove}>remove</button>

                
               </li>


               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;