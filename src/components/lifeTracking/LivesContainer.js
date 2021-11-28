import classNames from 'classnames';
import PropTypes from 'prop-types';
import LifeIcon from './LifeIcon';
import styles from './livesContainer.module.scss';

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
  count: PropTypes.number.isRequired,
  isFlashing: PropTypes.bool,
  isFading: PropTypes.bool,
  ...LifeIcon.propTypes
};

export default LivesContainer;