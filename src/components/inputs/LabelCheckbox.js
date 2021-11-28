import PropTypes from 'prop-types';
import Label from '../generic/Label';
import Checkbox from './Checkbox';
import styles from './labelCheckbox.module.scss';

const LabelCheckbox = ({ children, onChange, checked, id,  ...rest }) => (
  <div className={styles.container}>
    <Label id={id} {...rest} className={styles.label}>{children}</Label>
    <Checkbox value={checked} onChange={onChange} id={id} {...rest}/>
  </div>
);

LabelCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
  ...Label.defaultProps
};

LabelCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string,
  ...Label.propTypes,
  ...Checkbox.propTypes
};

export default LabelCheckbox;
