import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

const Checkbox = ({ onClick, checked, isPrimary }) => (
  <div
    className={classNames(
      styles.checkbox,
      isPrimary && styles['checkbox--primary']
    )}
  >
    <input
      type='checkbox'
      onClick={onClick}
      checked={checked}
    />
  </div>
);

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

Checkbox.defaultProps = {
  isPrimary: true,
};

export default Checkbox;
