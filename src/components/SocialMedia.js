import React from 'react';
import { resources } from "../resources";
import '../css/styles.css';
function SocialMedia() {
    const wrapperStyle = {
        marginTop: '20px',
        display: 'flex',
        height: '10%',
        justifyContent: 'center'
    }
    const imgStyle = {
        maxWidth : '60px'
    }
    const linkStyle = {
        marginLeft: '2%',
        marginRight: '2%',
    }
    return(
        <div style={wrapperStyle}>
            <a style={linkStyle} href={resources.SOCIAL_MEDIA_LINKS.LINKEDIN}>
                <img className='socialLink' style={imgStyle} alt={resources.SOCIAL_MEDIA_NAMES.LINKEDIN} src="/linkedin.png"></img>
            </a>
            <a  style={linkStyle} href={resources.SOCIAL_MEDIA_LINKS.GITHUB}>
                <img className='socialLink' style={imgStyle}  alt={resources.SOCIAL_MEDIA_NAMES.GITHUB}src="/github.png"></img>
            </a>
        </div>
    );
}

export default SocialMedia;