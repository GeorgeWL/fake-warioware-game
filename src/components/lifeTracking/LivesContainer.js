import classNames from 'classnames';
import PropTypes from 'prop-types';
import LifeIcon from './LifeIcon';
import styles from './livesContainer.module.scss';

const LivesContainer = ({ count, isFlashing, ...rest })=>(
  <div
    className={classNames(styles.container, isFlashing && styles.isFlashing)}
  >
    {count >= 0 && Array.from(Array(count))
      .map((index, item) => (
        <LifeIcon
          key={`life-${index}-${item}`}
          {...rest}
        />
      ))}
  </div>
);

LivesContainer.propTypes = {
  count: PropTypes.number.isRequired,
  isFlashing: PropTypes.bool,
  ...LifeIcon.propTypes
};

export default LivesContainer;