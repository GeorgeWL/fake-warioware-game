import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const Link = ({ href, newTab, type, disabled, children, ...props }) => {
  const newTabProps = newTab
    ? { target: '_blank', rel: 'noreferrer noopener' }
    : {};

  return (
    <a
      href={href}
      className={classNames(styles.link, type && styles[`link--${type}`], disabled && styles['link--disabled'])}
      {...newTabProps}
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([ 'primary', 'secondary' ]),
};

Link.defaultProps = {
  newTab: true,
  type: 'primary',
  disabled: false
};

export default Link;
