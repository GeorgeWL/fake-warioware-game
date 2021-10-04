import { useState } from 'react';
import LivesContainer from '../lifeTracking/LivesContainer';
import TimeDisplay from '../timeTracking/TimeDisplay';
import GameCanvas from './gameCanvas';

const GameContainer = ()=> {
  const [ isActive, setActive ] = useState(false);
  const [ lives, setLives ] = useState(3);

  return (
    <div>
      <TimeDisplay
        isActive={isActive}
        onTimerComplete={()=>setActive(false)}
        totalTime={10}
      />
      <GameCanvas/>
      <LivesContainer
        count={3}
      />
    </div>
  );
};

export default GameContainer;