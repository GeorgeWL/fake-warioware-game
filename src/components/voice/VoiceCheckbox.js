import 'md-gum-polyfill';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVoiceEnabled } from '../../app/mediaSlice';
import uuid from '../../uuid';
import Label from '../generic/Label';
import Checkbox from '../inputs/Checkbox';
import styles from './voiceCheckbox.module.scss';

/**
 * @description standalone control for enable/disabled microphone
 * @param {*} props
 */
const VoiceCheckbox = ({ children, id, accentColor, iconColor }) => {
  const dispatch = useDispatch();
  const [ voiceStreamEnabled, setVoiceStreamEnabled ] = useState(false);
  const [ voiceSwitchDisabled, setVoiceSwitchDisabled ] = useState(false);

  useEffect(() => {
    dispatch(setVoiceEnabled(voiceStreamEnabled));
  }, [ voiceStreamEnabled ]);

  const disableStream = () => {
    setVoiceStreamEnabled(false);
    if (window.stream) {
      window.stream.getAudioTracks().forEach((track) => track.stop());
      window.stream = null;
    }
  };

  const handleChange = (enabled) => {
    if (!window.stream) {
      navigator.mediaDevices
        .getUserMedia({
          audio: enabled,
        })
        .then((stream) => {
          window.stream = stream;
          setVoiceStreamEnabled(true);
        })
        .catch((err) => {
          console.error(err);
          disableStream();
          setVoiceSwitchDisabled(true);
        });
    } else if (!enabled) {
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
        value={voiceStreamEnabled}
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
