import PropTypes from 'prop-types';
import Label from '../generic/Label';
import Checkbox from '../inputs/Checkbox';

const VoiceSwitch = ({ children, onClick })=>(
  <div>
    <Label>{children}</Label>
    <Checkbox onClick={(value)=>onClick(value)}/>
  </div>
);

VoiceSwitch.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};