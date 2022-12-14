import '../styles/components/Reset.scss';
import PropTypes from 'prop-types';

function Reset({ handleResetClick }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    handleResetClick();
  };

  return (
    <button onClick={handleClick} className="form__reset">
      Reset
    </button>
  );
}

Reset.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
};

export default Reset;
