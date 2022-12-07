import Task from "./Task";
import React from "react";







const TaskDone = (props) => {

    const {id} = props

    const endDate = new Date().getDate()

    console.log(id)

    return ( 
        <>
      
       
        <p>data wykonania : {endDate}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 