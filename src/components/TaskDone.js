import Task from "./Task";
import App from "../App";
import React from "react";



const TaskDone = (props) => {

    const {id , items , text} = props

    let endDate = new Date().getDate
    
    console.log(props)


   

    return ( 
        <>
      
       
        {/* <p>data wykonania : {endDate}</p> */}
        <p>zadanie wykonane : {props.id} tresc :  {props.text}</p>
        
        </>
        
     );
}
 
export default TaskDone;
 