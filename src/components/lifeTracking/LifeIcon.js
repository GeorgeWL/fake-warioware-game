import styles from './lifeIcon.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LifeIcon = ({ isHardCore, size = 'medium', backgroundColor }) => (
  <div
    className={classNames(
      styles.heart,
      isHardCore && styles['heart--hardcore'],
      styles[`heart--${size}`]
    )}
    style={{ backgroundColor }}
  />
);

LifeIcon.propTypes = {
  isHardCore: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default LifeIcon;
