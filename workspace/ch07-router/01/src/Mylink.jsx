import PropTypes from 'prop-types';

Mylink.propTypes = {
  children: PropTypes.elementType,
  to: PropTypes.string,
}

function Mylink({children, to}){
  const handleClick = e => {
    e.preventDefault();
    window.history.pushState(null, '', e.target.pathname);
  }

  return (
    <a href={to} onClick={handleClick}>{children}</a>
  );
}

export default Mylink;