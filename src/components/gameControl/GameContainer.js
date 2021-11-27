import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../inputs/Button';
import LivesContainer from '../lifeTracking/LivesContainer';
import TimeDisplay from '../timeTracking/TimeDisplay';
import styles from './gameContainer.module.scss';
import GameWrapper from './GameWrapper';

const GameContainer = ({ children })=> {
  const [ isActive, setActive ] = useState(false);
  const [ lives, setLives ] = useState(3);

  return (
    <div className={styles.container}>
      <TimeDisplay
        isActive={isActive}
        onTimerComplete={()=>{
          setActive(false);
          if(lives > 0){
            setLives(lives - 1);
          }
        }}
        totalTime={10}
      />
      <GameWrapper>
        {children}
      </GameWrapper>
      <LivesContainer
        count={lives}
      />
      <Button
        onClick={()=>{
          lives > 0 && setActive(true);
        }}
      >
        Start!
      </Button>
    </div>
  );
};

GameContainer.propTypes = {
  children: PropTypes.node
};

export default GameContainer;