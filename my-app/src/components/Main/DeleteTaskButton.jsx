import React from "react";
import logo from '../../delete.png';
import { useContext } from "react";

const DeleteTaskButton = (props) =>
{
    const {keyID, deleteTask, startAnimation} = props;
    return(
       <button className="delete_task" 
       onClick={()=> 
       {
        startAnimation()
        setTimeout(() => {
        deleteTask(keyID)
        console.log(keyID)
        }, 1000);
       }}> 
       <img className='png_del' src={logo} alt="Удалить" /></button>
    )
}

export default DeleteTaskButton;