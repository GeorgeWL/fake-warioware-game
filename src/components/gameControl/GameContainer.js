import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../inputs/Button';
import LivesContainer from '../lifeTracking/LivesContainer';
import TimeDisplay from '../timeTracking/TimeDisplay';
import styles from './gameContainer.module.scss';
import GameWrapper from './GameWrapper';

const GameContainer = ({ children, gameDuration = 60 })=> {
  const [ isActive, setActive ] = useState(false);
  const [ lives, setLives ] = useState(3);
  const [ timePercentage, setTimePercent ] = useState(1.0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TimeDisplay
          isActive={isActive}
          onTimerComplete={()=>{
            setActive(false);
            if(lives > 0){
              setLives(lives - 1);
            }
          }}
          onTimerTick={(percentage)=>{
            setTimePercent(percentage);
          }
          }
          totalTime={gameDuration}
          size='small'
        />
        <LivesContainer
          count={lives}
          size='small'
          isFading={timePercentage === .2}
        />
      </div>
      <GameWrapper>
        {children}
      </GameWrapper>
      <Button
        onClick={()=>{
          if(lives > 0){
            setActive(true);
          }
          else{
            setLives(3);
            setActive(false);
          }
        }}
      >
        {lives <= 0 ? 'Restart?' : 'Start!'}
      </Button>
    </div>
  );
};

GameContainer.propTypes = {
  children: PropTypes.node,
  gameDuration: PropTypes.number.isRequired
};

export default GameContainer;