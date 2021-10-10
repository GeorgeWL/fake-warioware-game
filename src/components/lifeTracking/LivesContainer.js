import classNames from 'classnames';
import PropTypes from 'prop-types';
import LifeIcon from './LifeIcon';
import styles from './livesContainer.module.scss';

const LivesContainer = ({ count, isFlashing, isHardcore })=>(
  <div
    className={classNames(styles.container, isFlashing && styles.isFlashing)}
  >
    {Array.from(Array(count))
      .map(index => (
        <LifeIcon
          key={`life-${index}`}
          isHardCore={isHardcore}
        />
      ))}
  </div>
);

LivesContainer.propTypes = {
  count: PropTypes.number.isRequired,
  isFlashing: PropTypes.bool,
  isHardcore: PropTypes.bool
};

export default LivesContainer;