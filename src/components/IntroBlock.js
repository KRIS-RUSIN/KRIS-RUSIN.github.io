import React from 'react';
import '../css/styles.css';
function IntroBlock(props) {
    return(
        <div className='IntroBlockStyle'>
            <label>{props.Intro}</label>
        </div>
    );
}

export default IntroBlock;