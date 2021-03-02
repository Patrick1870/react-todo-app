import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title = 'Todo App Default Title', onAdd, showAdd }) => {
	const location = useLocation();

	return (
		<header className="header">
		<h1>{title}</h1>
		{location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Hide' : 'Show'} onClick={onAdd} />)}
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;