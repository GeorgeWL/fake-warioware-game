import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ children, primary, size = 'medium', className }) => (
  <label
    className={classNames(
      className,
      styles.label,
      primary && styles['label--primary'],
      styles[`label--${size}`]
    )}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  /**
   * optional additional classname
   */
  className: PropTypes.string,
};

export default Label;
