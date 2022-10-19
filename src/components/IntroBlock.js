import React from 'react';
function IntroBlock(props) {
    const introStyle = {  
        fontSize : '40px',
        fontFamily : "Courier New"
    }
    const wrapperStyle = {
        height: '25%',
        width: '25%',
        textAlign: 'center'
    }
    const outerStyle = {
        marginTop: '10%',
        display : 'flex',
        justifyContent: 'center'
    }
    return(
        <div style={outerStyle}>
            <div style={wrapperStyle}>
                <label style={introStyle}>{props.Intro}</label>
            </div>
        </div>
    );
}

export default IntroBlock;