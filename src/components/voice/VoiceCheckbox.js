import PropTypes from 'prop-types';
import uuid from '../../uuid';
import Label from '../generic/Label';
import Checkbox from '../inputs/Checkbox';

// TODO: Should it be functional, or purely UI?
const VoiceCheckbox = ({ children, onClick, id, size, accentColor, iconColor, disabled })=>(
  <div>
    <Label size={size} htmlFor={id}>{children}</Label>
    <Checkbox size={size} onClick={(value)=>onClick(value)} tickIcon='🎤' id={id} accentColor={accentColor} iconColor={iconColor} disabled={disabled}/>
  </div>
);

VoiceCheckbox.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  accentColor: PropTypes.string,
  /**
   *  only applies for utf8 emojis, for 2-byte (coloured) emojis does not apply
   */
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  /**
   * If is empty string, checkbox will not work, if nully will use default of a generated unique ID
   */
  id: PropTypes.string.isRequired,
};

VoiceCheckbox.defaultProps = {
  id: uuid()
};

export default VoiceCheckbox;