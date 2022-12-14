import React from 'react';
import '../styles/components/FilterBySpecies.scss';
import PropTypes from 'prop-types';

function FilterBySpecies({
  uniqueSpecies = ['Human', 'Alien'],
  searchSpecies = [],
  handleSpeciesChange,
}) {
  const handleChanges = (event) => {
    handleSpeciesChange(event.target.value);
  };

  const renderSpeciesOptions = uniqueSpecies.map((option, index) => {
    return (
      <React.Fragment key={index}>
        <input
          type="checkbox"
          id={option}
          name={option}
          value={option}
          onChange={handleChanges}
          checked={searchSpecies.includes(option)}
          className="form__species__input"
        />
        <label htmlFor={option}>{option}</label>
      </React.Fragment>
    );
  });

  return <fieldset className="form__species">{renderSpeciesOptions}</fieldset>;
}

FilterBySpecies.propTypes = {
  uniqueSpecies: PropTypes.array,
  searchSpecies: PropTypes.array.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
};

export default FilterBySpecies;
