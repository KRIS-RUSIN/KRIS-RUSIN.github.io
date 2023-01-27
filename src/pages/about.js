import React from 'react';
import '../css/styles.css';
import AboutPic from '../components/AboutPic';
import IntroBlock from '../components/IntroBlock'
import { resources } from '../resources';
  
function About() {
  return (
    <div className='About'>
      <h1>ABOUT ME</h1>
      <div>
        <IntroBlock Intro={resources.ABOUT_ME}></IntroBlock>
        <AboutPic Alt="Image of me" Source='/kris.jpg' />
      </div>
    </div>
  );
};
  
export default About;