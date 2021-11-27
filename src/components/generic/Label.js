import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ children, size, className, htmlFor, ...props }) => (
  <label
    className={classNames(className, styles.label, styles[`label--${size}`])}
    {...props}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /**
   * optional additional classname
   */
  className: PropTypes.string,
  /**
   * if htmlFor and string has length, styles differently to show label is a control
   */
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  size: 'medium',
};

export default Label;
