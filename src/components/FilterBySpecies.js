import React from 'react';

const FilterBySpecies = ({
  uniqueSpecies = [],
  searchSpecies = [],
  handleSpeciesChange,
}) => {
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
        />
        <label htmlFor={option}>{option}</label>
      </React.Fragment>
    );
  });

  return <fieldset>{renderSpeciesOptions}</fieldset>;
};
export default FilterBySpecies;
