import React from 'react';
const Header = () =>
{
    return(
    <header className=" container header">
            <div className="header__wrapper">
            <div className="title__toDoList">
                <h1 className='title__header'>SampleList</h1>
            </div>
            <div className="user_conferences">
                <button className='user_button'>Vova Chernov</button>
            </div>
        </div>
    </header>
    )
}

export default Header;