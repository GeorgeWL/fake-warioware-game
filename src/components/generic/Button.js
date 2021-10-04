import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({  isPrimary, backgroundColor, textColor, size, label, ...props }) => {

  const backgroundColorStyle =
    typeof backgroundColor === 'string' && backgroundColor
      ? { backgroundColor }
      : {};
  const textColorStyle = typeof textColor ==='string' && textColor ? { color: textColor } : {};
  const styleObject = { ...backgroundColorStyle, ...textColorStyle };

  return (
    <button
      type='button'
      className={classNames(styles.button, styles[`button--${size}`], styles[`button--${isPrimary ? 'primary' : 'secondary' }`] )}
      style={styleObject}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  isPrimary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What background color to use
   */
  textColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  backgroundColor: 'lightblue',
  textColor: 'white',
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;