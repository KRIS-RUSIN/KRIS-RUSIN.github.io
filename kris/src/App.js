import IntroBlock from './components/IntroBlock';
import './App.css';
import { resources } from './resources';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <IntroBlock Intro={resources.INTRO}></IntroBlock>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
