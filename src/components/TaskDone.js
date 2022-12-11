import Task from "./Task";
import React from "react";



const TaskDone = (props) => {

    const {id , items} = props

    const endDate = new Date().getDay
    

    console.log(id)

   

    return ( 
        <>
      
       
        <p>data wykonania : {endDate}</p>
        <p>zadanie wykonane : {id}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 