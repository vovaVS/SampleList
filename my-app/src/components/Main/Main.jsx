import { useCallback, useState } from 'react';
import InputUser from './InputUser';
import ContentTask from './ContentTask';
import ContextValue from '../contextElement';
const Main = () =>
{
    const [task, setTask] = useState([])
    
    const createTask = useCallback((text) =>
    {   
        const date = new Date();

        setTask((res)=> [...res, {id: res.length + 1, content: text, date: date.toLocaleString()}])
    }, [])

    const deleteTask = useCallback((taskID)=>
    {
        const update = task.filter((ID) => ID.id !== taskID)
        setTask(update)
    }, [task])

    const functionValue = {createTask, deleteTask}
    
    return(
    <ContextValue.Provider value={functionValue}>
    <main className='main'>
        <div className="container main_wrapper">
            <InputUser/>
            {task.length === 0 ? <p>ПУСТО ЗДЕСЬ ПОКА ЧТО</p> : <ContentTask task = {task}/>}
        </div>
    </main>
    </ContextValue.Provider>
    )
}

export default Main;