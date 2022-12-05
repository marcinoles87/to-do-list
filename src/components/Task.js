import React from 'react' 


const Task = (props) => {

const {items  , activ  , name} = props

const date= new Date ();
const newDate = date.toLocaleDateString();


   
const handleDelete = () => {

 

   
  if(activ === true){
     
   document.querySelector('li').style.backgroundColor = "red"
   
  

  }
   

  
   
}

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  
                  {item.text} - {newDate} - {name} - 
                  <button  onClick={handleDelete}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;