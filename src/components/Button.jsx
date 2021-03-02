import PropTypes from 'prop-types';

const Button = ({ color = '#999', text = 'Default Button', onClick }) => {

	return (
		<button onClick={onClick} className="btn" style={{ backgroundColor: color }}>
			{text}
		</button>
	)
}

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button;