import PropTypes from 'prop-types';
import Label from '../generic/Label';
import Checkbox from './Checkbox';

const LabelInput = ({ children, onChange, checked, id }) => (
  <div>
    <Label id={id}>{children}</Label>
    <Checkbox value={checked} onChange={onChange} id={id}/>
  </div>
);

LabelInput.defaultProps = {
  ...Checkbox.defaultProps,
  ...Label.defaultProps
};

LabelInput.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string,
  ...Label.propTypes,
  ...Checkbox.propTypes
};

export default LabelInput;
