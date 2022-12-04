import React from 'react' 


const Task = (props) => {

const {items  , activ , name} = props

const loacalData = String(Date());


   
const handleRemove = (items) => {
  
  if(activ === true)(
   console.log("dziala")

  )
   
}

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  
                  {item.text} - {loacalData} - {name}
                  <button onClick={handleRemove}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;