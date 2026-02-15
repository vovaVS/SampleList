import React, {useContext, useState } from 'react';
import SubmitButtonInput from './SubmitButton';
import ContextValue from '../contextElement';
const InputUser = ()=>
{
 const [statics, setStatic] = useState('');
 const {createTask} = useContext(ContextValue);

 const clearInput = ()=>
 {
    setStatic('')
 }
    return(
    <section className="user_input_section">
        <div className="input_section__wrapper">
        <input type="text" value={statics} onChange={((e)=> setStatic(e.target.value) ) } className='input_user_wrap' placeholder='Add a ToDo!'/>
        <SubmitButtonInput infos = {statics} addtask = {createTask} clearInput = {clearInput}/>
        </div>
    </section>
    
    )
}

export default InputUser;
