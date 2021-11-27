import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import styles from './timeDisplay.module.scss';

const TimeDisplay = ({ isActive, totalTime, onTimerComplete, size = 'medium', faceBorderColor = 'red', handColor = 'red', onTimerTick })=>{
  const [ timeRemaining, setTimeRemaining ] = useState(totalTime);
  const clockRef = useRef();
  const totalTimePercentage = parseFloat((timeRemaining / totalTime).toFixed(2));
  const clockDegrees = (360 * totalTimePercentage);

  useEffect(()=>{
    let interval;
    if(isActive){
      interval =  setInterval(()=>{
        if(timeRemaining > 0){
          setTimeRemaining(timeRemaining - 1);
        } else {
          onTimerComplete();
          clearInterval(interval);
        }
        onTimerTick(totalTimePercentage);
        clockRef.current.getElementById('hand').setAttribute('transform', `rotate(${clockDegrees} 50 50)`);
      }, 100);
    }else{
      setTimeRemaining(totalTime);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [ isActive, timeRemaining ]);

  if(clockRef && clockRef.current){
    clockRef?.current?.getElementById('hand')?.setAttribute('stroke', handColor );
    clockRef?.current?.getElementById('face')?.setAttribute('stroke', faceBorderColor);
  }
  return(
    <Clock
      className={classNames(
        styles.clock,
        styles[`clock--${size}`]
      )}
      ref={clockRef}
    />
  );
};

TimeDisplay.propTypes = {
  isActive: PropTypes.bool.isRequired,
  totalTime: PropTypes.number.isRequired,
  onTimerComplete: PropTypes.func.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  faceBorderColor: PropTypes.string,
  handColor: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
};

TimeDisplay.defaultProps = {
  isActive: false,
  handColor: 'red',
  faceBorderColor: 'red'
};

export default TimeDisplay;