import React from "react";
import logo from '../../delete.png';

const DeleteTaskButton = (props) =>
{
    const {keyID, deleteTask} = props;
    return(
       <button className="delete_task" 
       onClick={()=> 
       {
        setTimeout(() => {
        deleteTask(keyID)
        }, 300);
       }}> 
       <img className='png_del' src={logo} alt="Удалить" /></button>
    )
}

export default DeleteTaskButton;