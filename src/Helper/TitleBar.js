import React from 'react';
import '../CSS/TitleBar.scss';

function TitleBar({title}) {

    return (
        <div className='title-bar'>
            <span className='title-text'>{title}</span>
        </div>
    )
}

export default TitleBar
