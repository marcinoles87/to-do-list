import React from 'react' 


const Task = (props) => {

const {items  , activ  , name , id} = props

const date= new Date ();
const newDate = date.toLocaleDateString();



   
const handleDelete = (id) => {

   const data = [items]
   const index = data.findIndex(id)
   console.log(index)


 

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
         
       </div>
      );
}
 
export default Task;