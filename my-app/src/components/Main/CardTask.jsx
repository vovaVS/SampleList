import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import { memo} from "react";

const CardTask = (props) =>
{
const {taskID, contentTask, deleteTask, dateTask, anim, noder} = props;
return(
    <div className="card" key={taskID} ref={noder}>
    <div className="card__wrapper">
    <div className="title-card">Задача №{taskID}</div>
    <div className="content_card"><p>{contentTask}</p></div>
    <div className="button_delete_task">
    <p className="date">{dateTask}</p>
    <DeleteTaskButton keyID = {taskID} deleteTask = {deleteTask} startAnimation = {anim}/>
    </div>
    </div>
    </div>
    )}

export default memo(CardTask);