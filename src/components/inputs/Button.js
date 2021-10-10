import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({  primary, primaryColor,  secondaryColor, size, children, ...props }) => {

  const backgroundColorStyle =
    typeof primaryColor === 'string' && primaryColor
      ? { backgroundColor: primary ? primaryColor : secondaryColor }
      : {};
  const textColorStyle = typeof secondaryColor ==='string' && secondaryColor ? { color: primary ? secondaryColor : primaryColor } : {};
  const borderColorStyle = typeof primaryColor ==='string' && primaryColor ? { borderColor: primary ? 'transparent' : primaryColor } : {};
  const styleObject = { ...backgroundColorStyle, ...textColorStyle, ...borderColorStyle };

  return (
    <button
      type='button'
      className={classNames(styles.button, styles[`button--${size}`], styles[`button--${primary ? 'primary' : 'secondary' }`] )}
      style={styleObject}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  primaryColor: PropTypes.string,
  /**
   * What background color to use
   */
  secondaryColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  primaryColor: '#00c0ff',
  secondaryColor: 'white',
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled: false
};

export default Button;