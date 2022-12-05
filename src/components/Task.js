import React from 'react' 


const Task = (props) => {

const {items  , activ  , name} = props

const date= new Date ();
const newDate = date.toLocaleDateString();


   
const handleRemove = (item) => {

   console.log(item)
   items.pop();
   
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
                  <button  onClick={handleRemove}>remove</button>
                
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;