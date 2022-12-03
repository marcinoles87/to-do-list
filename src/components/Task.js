import React from 'react' 





const handleRemove = () => {

}


const Task = ({items},{activ}) => {


const handleDone = (props) => {
  const li = document.querySelectorAll('li');
  console.log(activ)
  console.log(items)
  if(li === true){
   li.style.color = 'red'
  }
   
}
 

    return (
       <div>
         <ul>
            {items.map(item => (
               <li key={item.id}>
                  {item.text}
                  {item.active}
                  <button onClick={handleDone}>done</button>
                  <button onClick={handleRemove}>remove</button>
               </li>
               
            ))}
           
         </ul> 
         
       </div>
      );
}
 
export default Task;