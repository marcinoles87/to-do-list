import React from 'react' 


const Task = (props) => {

const {items , data , activ } = props

const loacalData = data.toString();
   
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
                
                
                
                  {loacalData}
                  <button onClick={handleRemove}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;