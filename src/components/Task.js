import React from 'react' 




const handleRemove = () => {

}


const Task = ({items},{activ}) => {



console.log(items)
 

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>

                  {item.text}
                  {item.active}
                  
                 
                  <button onClick={handleRemove}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;