import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import uuid from '../../uuid';
import styles from './checkbox.module.scss';

const Checkbox = ({
  onChange,
  size,
  disabled,
  title,
  accentColor,
  iconColor,
  tickIcon,
  id,
  className,
}) => {
  const [ checked, setChecked ] = useState(false);

  useEffect(() => {
    onChange(checked);
  }, [ checked ]);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(
        styles.checkbox,
        disabled && styles['checkbox--disabled'],
        styles[`checkbox--${size}`],
        className
      )}
    >
      <label
        htmlFor={id}
        title={title}
        style={{
          backgroundColor: checked ? accentColor : 'white',
          borderColor: accentColor,
          color: checked ? iconColor : 'transparent',
        }}
      >
        {checked && tickIcon}
      </label>
      <input
        disabled={disabled}
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  accentColor: PropTypes.string,
  /**
   *  only applies for utf8 emojis, for 2-byte (coloured) emojis does not apply
   */
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  tickIcon: PropTypes.oneOf([ '✔', '🔪', '⚡', '❤', '🎁', '👍', '😁', '🎤' ]),
  id: PropTypes.string,
  /**
   * optional additional classname
   */
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  accentColor: '#00c0ff',
  iconColor: 'white',
  size: 'medium',
  disabled: false,
  tickIcon: '✔',
  id: uuid(),
};

export default Checkbox;
