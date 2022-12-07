import React from 'react' 


const Task = (props) => {

const {items  , activ  , name , id} = props

const date= new Date ();
const newDate = date.toLocaleDateString();



   
const handleDelete = (id) => {

   const data = [items]
  
   


 

  if(activ === true){
    
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