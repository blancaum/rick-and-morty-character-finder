import React from 'react';
import '../styles/components/FilterByPlanet.scss';
import PropTypes from 'prop-types';

function FilterByPlanet({ comparePlanet, handleComparePlanetChange }) {
  const handleChanges = (event) => {
    handleComparePlanetChange(event.target.checked);
    console.log(event.target.checked);
  };
  console.log(comparePlanet);

  return (
    <fieldset className="form__planet">
      <input
        type="checkbox"
        id="planet"
        name="planet"
        value="planet"
        onChange={handleChanges}
        checked={comparePlanet}
        className="form__planet__input"
      />
      <label htmlFor="planet">Check in origin</label>
    </fieldset>
  );
}

FilterByPlanet.propTypes = {
  comparePlanet: PropTypes.bool.isRequired,
  handleComparePlanetChange: PropTypes.func.isRequired,
};

export default FilterByPlanet;
