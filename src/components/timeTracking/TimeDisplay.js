import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const TimeDisplay = ({ isActive, totalTime, onTimerComplete})=>{
  const [timeRemaining, setTimeRemaining] = useState(totalTime);

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
      }, 1000);
    }else{
      setTimeRemaining(totalTime);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);
 

  return(
    <progress min='0' max={totalTime} value={timeRemaining}/>
  );
};

TimeDisplay.propTypes={
  isActive: PropTypes.bool.isRequired,
  totalTime: PropTypes.number.isRequired,
  onTimerComplete: PropTypes.func.isRequired
};

export default TimeDisplay;