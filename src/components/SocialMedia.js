import React from 'react';
import { resources } from "../resources";
import '../css/styles.css';
function SocialMedia() {
    return(
        <div className='SocialMediaStyle'>
            <a href={resources.SOCIAL_MEDIA_LINKS.LINKEDIN}>
                <img alt={resources.SOCIAL_MEDIA_NAMES.LINKEDIN} src="/linkedin.png"></img>
            </a>
            <a href={resources.SOCIAL_MEDIA_LINKS.GITHUB}>
                <img alt={resources.SOCIAL_MEDIA_NAMES.GITHUB}src="/github.png"></img>
            </a>
        </div>
    );
}

export default SocialMedia;