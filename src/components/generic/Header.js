import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const HeaderWrapper = ({ headerLevel, children, ...props }) => {
  switch (headerLevel) {
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'h4':
      return <h4 {...props}>{children}</h4>;
    case 'h5':
      return <h5 {...props}>{children}</h5>;
    default:
      return <h1 {...props}>{children}</h1>;
  }
};

const Header = ({ children, className, ...props }) => (
  <HeaderWrapper className={classNames(className, styles.header)} {...props}>
    {children}
  </HeaderWrapper>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node,
  headerLevel: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5' ]),
};

Header.propTypes = {
  children: PropTypes.node,
  headerLevel: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5' ]),
  /**
   * optional additional classname
   */
  className: PropTypes.string,
};

Header.defaultProps = {
  headerLevel: 'h1',
};

export default Header;
