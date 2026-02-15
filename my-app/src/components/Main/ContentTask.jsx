import { useContext, useRef, useState} from 'react';
import CardTask from './CardTask';
import ContextValue from '../contextElement';
import { memo } from 'react';
import { CSSTransition} from 'react-transition-group';
import {TransitionGroup} from 'react-transition-group'
const ContentTask = (props) =>
{
    const {task} = props;
    const {deleteTask} = useContext(ContextValue);
    const nodeRef = useRef(null);
    const [visible, setvisible] = useState(false); 

    const anim = ()=>
    {
        setvisible(true)
        console.log(visible)
    }
    return (
    <section className="contentTask">
            <TransitionGroup className={"taskList__wrapper"}>
            {task.map((tasks)=> 
             <CSSTransition nodeRef={nodeRef} classNames="fade" timeout={300} key={tasks.id}>
             <CardTask contentTask = {tasks.content} 
             taskID = {tasks.id} 
             deleteTask = {deleteTask} 
             dateTask = {tasks.date} 
             anim = {anim} 
             noder = {nodeRef}/>
            </CSSTransition>
            )}
            </TransitionGroup>
    </section>
    )
}


export default memo(ContentTask);