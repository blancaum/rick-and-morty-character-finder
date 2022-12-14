import React from 'react';
import '../styles/components/FilterBySpecies.scss';

function FilterBySpecies({
  uniqueSpecies = [],
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
export default FilterBySpecies;
