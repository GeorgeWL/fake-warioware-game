import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Clock } from '../../assets/clock.svg';

const TimeDisplay = ({ isActive, totalTime, onTimerComplete })=>{
  const [ timeRemaining, setTimeRemaining ] = useState(totalTime);
  const clockRef = useRef();

  useEffect(()=>{
    let interval;
    if(isActive){
      interval =  setInterval(()=>{
        if(timeRemaining>0){
          setTimeRemaining(timeRemaining-1);
          console.log('ref', clockRef);
        } else {
          onTimerComplete();
          clearInterval(interval);
        }
      }, 1000);
    }else{
      setTimeRemaining(totalTime);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [ isActive, timeRemaining ]);


  return(
    <Clock
      ref={clockRef}
    />
  );
};

TimeDisplay.propTypes={
  isActive: PropTypes.bool.isRequired,
  totalTime: PropTypes.number.isRequired,
  onTimerComplete: PropTypes.func.isRequired
};

export default TimeDisplay;