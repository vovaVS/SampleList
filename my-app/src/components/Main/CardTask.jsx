import React, { useState, useRef, useContext} from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import { memo } from "react";
import { CSSTransition} from 'react-transition-group';
import ContextValue from '../contextElement';

const CardTask = (props) =>
{
const {taskID, contentTask, deleteTask, dateTask, stAnim} = props;
const [visible, setvisible] = useState(true); 
const nodeRef = useRef(null);

const startAnimation = () =>
{
    setvisible(false)
}

return(
    <ContextValue value={startAnimation}>
    <CSSTransition nodeRef={nodeRef} in={visible} classNames="fade" timeout={300} unmountOnExit>
    <div ref={nodeRef} className="card" key={taskID}>
    <div className="card__wrapper">
    <div className="title-card">Задача №{taskID}</div>
    <div className="content_card"><p>{contentTask}</p></div>
    <div className="button_delete_task">
    <p className="date">{dateTask}</p>
    <DeleteTaskButton keyID = {taskID} deleteTask = {deleteTask} startAnimation = {startAnimation}/>
    </div>
    </div>
    </div>
    </CSSTransition>
    </ContextValue>
    )}

export default memo(CardTask);