import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Star } from '../../assets/star.svg';
import styles from './lifeIcon.module.scss';

const LifeIcon = ({ isHardCore, size = 'medium', backgroundColor = 'red', hardcoreBorderColor = 'gold', iconName = 'heart' }) => {
  const commonProps = {
    className: classNames(
      styles.icon,
      styles[`icon--${size}`]
    ),
    style: {
      fill: backgroundColor,
      filter: isHardCore && `drop-shadow(1px 2px 5px ${hardcoreBorderColor})`
    },
  };
  switch (iconName) {
  case 'star':
    return (
      <Star
        {...commonProps}
      />
    );
  case 'heart':
  default:
    return (
      <Heart
        {...commonProps}
      />
    );
  }
};

LifeIcon.propTypes = {
  isHardCore: PropTypes.bool,
  backgroundColor: PropTypes.string,
  hardcoreBorderColor: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  iconName: PropTypes.oneOf([ 'heart', 'star' ])
};

export default LifeIcon;
