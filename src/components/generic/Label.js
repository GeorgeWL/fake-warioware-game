import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ children, primary })=>(
  <label
    className={classNames(styles.label, primary && styles['label--primary'])}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool
};

export default Label;