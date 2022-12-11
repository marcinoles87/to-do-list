import React from 'react' 
import { useState } from 'react';


const Task = (props) => {

   let [task , setTask] = useState()



const {items  , activ  , name , id , text} = props

const date= new Date ();
const newDate = date.toLocaleDateString();



   
const handleDelete = (id) => {

   
   

  
   
   const index = items.findIndex( task => task.id === id)
   console.log(index)
   items.splice(index,1)
   
   console.log(items)
  

   setTask(
      task = items
      
   )

  
  
   if(activ === true && items.length > 1 ) {
      const li = document.querySelector('li')
      li.style.backgroundColor = 'red'
      li.style.textDecoration = 'line-through'
      
      
    }

   
   
 
 
   
}

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  
                  {item.text} - {newDate} - {name} - 

                  <button  onClick={handleDelete.bind(this , id)}>remove</button>
                  
               </li>

               

               
            ))}
           
         </ul> 

         <h2>ilosc zadan do zrobienia : {items.length}</h2>
         
       </div>
      );
}
 
export default Task;