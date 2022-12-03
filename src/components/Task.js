import React from 'react' 


const handleDone = () => {

}


const handleRemove = () => {
   
}


const Task = ({items}) => {

 

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  {item.text}
                  <button onClick={handleDone}>done</button>
                  <button onClick={handleRemove}>remove</button>
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;