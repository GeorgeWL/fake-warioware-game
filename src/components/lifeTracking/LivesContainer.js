import classNames from 'classnames';
import PropTypes from 'prop-types';
import LifeIcon from './LifeIcon';
import styles from './livesContainer.module.scss';

/**
 * Most properties are inherited from LifeIcon, creates a list of life icons, with length of `count` prop
 */
const LivesContainer = ({ count, isFlashing, isFading, ...rest })=>(
  <div
    className={classNames(styles.container, isFlashing && styles.isFlashing)}
  >
    {count >= 0 && Array.from(Array(count))
      .map((_item, index) => (
        <LifeIcon
          key={`life-${index}`}
          isFading={index === 0 && isFading}
          {...rest}
        />
      ))}
  </div>
);

LivesContainer.propTypes = {
  /**
   * Number of Life Icons to present
   */
  count: PropTypes.number.isRequired,
  /**
   * Flashing should begin when less than 10% of time left
   */
  isFlashing: PropTypes.bool,
  /**
   * when life lost, start fade animation
   */
  isFading: PropTypes.bool,
  ...LifeIcon.propTypes
};

export default LivesContainer;