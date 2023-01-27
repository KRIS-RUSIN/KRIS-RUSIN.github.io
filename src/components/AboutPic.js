import React from 'react';
import '../css/styles.css';

function AboutPic(props) {
    return(
        <div>
            <img alt={props.Alt} src={props.Source} className='aboutPicImg'></img>
        </div>
    );
}

export default AboutPic;