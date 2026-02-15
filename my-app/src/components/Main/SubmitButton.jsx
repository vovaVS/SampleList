import React from 'react';

const SubmitButtonInput = (props) =>
{
    const {addtask, infos} = props;
    return (
        <button className='submit_buttonInput' onClick={()=> addtask(infos)}>ADD</button>
    )
}

export default SubmitButtonInput;