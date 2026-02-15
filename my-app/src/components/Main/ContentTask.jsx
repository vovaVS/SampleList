import { useContext} from 'react';
import CardTask from './CardTask';
import ContextValue from '../contextElement';
import { memo } from 'react';
const ContentTask = (props) =>
{
    const {task} = props;
    const {deleteTask} = useContext(ContextValue);
    return (
    <section className="contentTask">
        <div className="taskList__wrapper">
            {task.map((tasks)=> 
            <CardTask contentTask = {tasks.content} taskID = {tasks.id} deleteTask = {deleteTask} dateTask = {tasks.date}/>
            )}
        </div>
    </section>
    )
}

export default memo(ContentTask);