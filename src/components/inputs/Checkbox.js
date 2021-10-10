import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import uuid from '../../uuid';
import styles from './checkbox.module.scss';


const Checkbox = ({ onClick,  size, disabled, title, accentColor, iconColor, tickIcon, id }) => {
  const [ checked, setChecked ] = useState(false);

  useCallback(
    () => onClick(checked),
    [ checked ],
  );

  const handleClick = ()=>{
    setChecked(prevState=>!prevState);
  };

  return(
    <div
      className={classNames(
        styles.checkbox,
        disabled && styles['checkbox--disabled'],
        styles[`checkbox--${size}`]
      )}
    >
      <label
        htmlFor={id}
        title={title}
        style={{
          backgroundColor: checked ? accentColor : 'white',
          borderColor: accentColor,
          color: checked ? iconColor : 'transparent'
        }}
      >
        {checked && tickIcon}
      </label>
      <input
        disabled={disabled}
        type="checkbox" id={id}
        onClick={handleClick}
        checked={checked}
      />
    </div>
  );};

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  accentColor: PropTypes.string,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  tickIcon: PropTypes.oneOf([ '✔', '🔪', '⚡', '❤', '🎁', '👍', '😁', '🎤' ]),
  id: PropTypes.string
};

Checkbox.defaultProps = {
  accentColor: '#00c0ff',
  iconColor: 'white',
  size: 'medium',
  disabled: false,
  tickIcon: '✔',
  id: uuid()
};

export default Checkbox;
