import PropTypes from 'prop-types';
import styles from './scoreDisplay.module.scss';

const ScoreDisplay = ({ score, maxScore }) => (
  <div className={styles.container}>
    {score}
    {maxScore && <span className={styles.divider}>/</span>}
    {maxScore}
  </div>
);

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number,
};

ScoreDisplay.defaultProps = {
  score: 0,
};

export default ScoreDisplay;
