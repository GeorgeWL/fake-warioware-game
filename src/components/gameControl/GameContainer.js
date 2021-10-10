import { useState } from 'react';
import Button from '../inputs/Button';
import LivesContainer from '../lifeTracking/LivesContainer';
import TimeDisplay from '../timeTracking/TimeDisplay';
import GameCanvas from './GameCanvas';
import styles from './gameContainer.module.scss';

const GameContainer = ()=> {
  const [ isActive, setActive ] = useState(false);
  const [ lives, setLives ] = useState(3);

  return (
    <div className={styles.container}>
      <TimeDisplay
        isActive={isActive}
        onTimerComplete={()=>{
          setActive(false);
          if(lives>0){
            setLives(lives-1);
          }
        }}
        totalTime={10}
      />
      <GameCanvas/>
      <LivesContainer
        count={lives}
      />
      <Button
        onClick={()=>{
          lives>0&&setActive(true);
        }}
      >
        Start!
      </Button>
    </div>
  );
};

export default GameContainer;