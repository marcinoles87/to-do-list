import Task from "./Task";
import React from "react";



const TaskDone = (props) => {

    const {id , items} = props

    const endDate = new Date().getDate()

   

    return ( 
        <>
      
       
        <p>data wykonania : {endDate}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 