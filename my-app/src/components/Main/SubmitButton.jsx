import React from 'react';

const SubmitButtonInput = (props) =>
{
    const {addtask, infos, clearInput} = props;
    return (
        <button className='submit_buttonInput'
         onClick={()=> 
         {
            addtask(infos)
            clearInput()
        }}>ADD</button>
    )
}

export default SubmitButtonInput;