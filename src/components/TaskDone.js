import Task from "./Task";
import React from "react";



const TaskDone = (props) => {

    const {id , items} = props

    let endDate = new Date().getDate
    



   

    return ( 
        <>
      
       
        {/* <p>data wykonania : {endDate}</p> */}
        <p>zadanie wykonane : {id}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 