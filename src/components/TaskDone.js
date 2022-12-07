import Task from "./Task";
import React from "react";







const TaskDone = (props) => {

    const endDate = new Date().getDate()

    console.log(props.id)

    return ( 
        <>
        <h1>Task Done</h1>
        <p>{props.id}</p>
        <p>data wykonania : {endDate}</p>
        
        </>
        
     );
}
 
export default TaskDone;