import PropTypes from 'prop-types';
import React from 'react';
import styles from './gameWrapper.module.scss';

const GameWrapper = ({ onGameStateChange, children }) => (
  <div className={styles.container}>{React.cloneElement(children, { onGameStateChange })}</div>
);

GameWrapper.propTypes = {
  onGameStateChange: PropTypes.func,
  children: PropTypes.instanceOf(HTMLCanvasElement)
};

export default GameWrapper;
