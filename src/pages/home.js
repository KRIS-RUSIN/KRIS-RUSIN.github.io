import React from 'react';
import '../css/styles.css';
import IntroBlock from '../components/IntroBlock';
import { resources } from '../resources';
import SocialMedia from '../components/SocialMedia';
  
function Home() {
  return (
    <div className='Home'>
        <IntroBlock Intro={resources.INTRO}></IntroBlock>
        <SocialMedia></SocialMedia>
    </div>
  );
};
  
export default Home;