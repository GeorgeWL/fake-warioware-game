import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './link.module.scss';

const Link = ({ href, newTab = true, type = 'primary',disabled, children }, ...rest) => {
  const newTabProps = newTab
    ? { target: '_blank', rel: 'noreferrer noopener' }
    : {};

  return (
    <a
      href={href}
      className={classNames(styles.link, type && styles[`link--${type}`])}
      {...{ newTabProps, ...rest }}
      disabled={disabled}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  disabled:PropTypes.bool,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Link;
