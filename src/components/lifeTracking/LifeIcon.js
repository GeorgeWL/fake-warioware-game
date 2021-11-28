import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconNameTypes } from '../../constants/IconNameTypes';
import styles from './lifeIcon.module.scss';

const LifeIcon = ({
  isHardCore,
  isFading,
  size = 'medium',
  backgroundColor = 'red',
  hardcoreBorderColor = 'gold',
  iconName = IconNameTypes.HEART,
}) => {
  const commonProps = {
    className: classNames(styles.icon, styles[`icon--${size}`], { [styles.isFading]: isFading }),
    style: {
      color: backgroundColor,
      filter: isHardCore && `drop-shadow(.5px 1px 2px ${hardcoreBorderColor})`,
    },
  };

  return <div {...commonProps}>{iconName}</div>;
};

LifeIcon.propTypes = {
  isHardCore: PropTypes.bool,
  isFading: PropTypes.bool,
  backgroundColor: PropTypes.string,
  hardcoreBorderColor: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  iconName: PropTypes.oneOf(Object.values(IconNameTypes)).isRequired,
};

export default LifeIcon;
