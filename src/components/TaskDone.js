import Task from "./Task";
import App from "../App";
import React from "react";



const TaskDone = (props) => {

    const {id , items , text} = props

    let endDate = new Date().getDate
    
    console.log(props.id)


    return ( 
        <>
      
       
      
        <p>zadanie wykonane : {id} tresc :  {text}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 