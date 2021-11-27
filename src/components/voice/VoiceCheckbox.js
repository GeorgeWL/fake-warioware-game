import 'md-gum-polyfill';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVoiceEnabled, setVoiceEnabled, setVoiceStream } from '../../app/mediaSlice';
import uuid from '../../uuid';
import Label from '../generic/Label';
import Checkbox from '../inputs/Checkbox';
import styles from './voiceCheckbox.module.scss';

/**
 * @description standalone control for enable/disable microphone
 */
const VoiceCheckbox = ({ children, id, accentColor, iconColor }) => {
  const dispatch = useDispatch();
  const voiceEnabled = useSelector(selectVoiceEnabled);
  const [ voiceSwitchDisabled, setVoiceSwitchDisabled ] = useState(false);

  const disableStream = (error) => {
    dispatch(setVoiceEnabled(false));
    if (error) {
      setVoiceSwitchDisabled(true);
      console.error(error);
    }
    if (window.stream) {
      window.stream.getAudioTracks().forEach((track) => track.stop());
      window.stream = null;
      dispatch(setVoiceStream(null));
    }
  };

  const handleChange = (enabled) => {
    if (enabled) {
      navigator.mediaDevices
        .getUserMedia({
          audio: enabled,
        })
        .then((stream) => {
          window.stream = stream;
          dispatch(setVoiceStream(window.stream));
          dispatch(setVoiceEnabled(true));
        })
        .catch((err) => {
          disableStream(err);
        });
    } else {
      disableStream();
    }
  };

  return (
    <div className={styles.container}>
      <Label htmlFor={id} className={styles.label}>
        {children}
      </Label>
      <Checkbox
        size="small"
        value={voiceEnabled}
        onChange={(value) => handleChange(value)}
        id={id}
        accentColor={accentColor}
        iconColor={iconColor}
        disabled={voiceSwitchDisabled}
      />
    </div>
  );
};

VoiceCheckbox.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  accentColor: PropTypes.string,
  /**
   *  only applies for utf8 emojis, for 2-byte (coloured) emojis does not apply
   */
  iconColor: PropTypes.string,
  children: PropTypes.node,
  /**
   * If is empty string, checkbox will not work, if nully will use default of a generated unique ID
   */
  id: PropTypes.string.isRequired,
};

VoiceCheckbox.defaultProps = {
  id: uuid(),
};

export default VoiceCheckbox;
