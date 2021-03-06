import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRef } from 'react';
import styles from './button.module.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary,
  primaryColor,
  secondaryColor,
  size,
  children,
  className,
  onClick,
  ...props
}) => {
  const ref = useRef();
  const backgroundColor = primary ? primaryColor : secondaryColor;
  const color = primary ? secondaryColor : primaryColor;
  const borderColor = primary ? 'transparent' : primaryColor;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--background', backgroundColor);
      ref.current.style.setProperty('--color', color);
      ref.current.style.setProperty('--border', borderColor);
    }
  }, [ borderColor, color, backgroundColor, primary ]);

  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${primary ? 'primary' : 'secondary'}`],
        className
      )}
      ref={ref}
      onClick={onClick}
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
  disabled: PropTypes.bool,
  /**
   * optional additional classname
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  primaryColor: '#00c0ff',
  secondaryColor: 'white',
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled: false,
};

export default Button;
