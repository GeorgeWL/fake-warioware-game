import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Clock } from '../../assets/clock.svg';

const TimeDisplay = ({ isActive, totalTime, onTimerComplete })=>{
  const [ timeRemaining, setTimeRemaining ] = useState(totalTime);
  const clockRef = useRef();
  const totalTimePercentage = (timeRemaining / totalTime).toFixed(2);
  const clockDegrees = (360 * totalTimePercentage);

  useEffect(()=>{
    let interval;
    if(isActive){
      interval =  setInterval(()=>{
        if(timeRemaining>0){
          setTimeRemaining(timeRemaining-1);
        } else {
          onTimerComplete();
          clearInterval(interval);
        }
        clockRef.current.getElementById('hand').setAttribute('transform', `rotate(${clockDegrees} 50 50)`);
      }, 100);
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

TimeDisplay.defaultProps ={
  isActive: false
};

export default TimeDisplay;