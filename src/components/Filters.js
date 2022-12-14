import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import '../styles/components/Filters.scss';
import PropTypes from 'prop-types';

function Filters({
  searchName = '',
  handleNameChange,
  uniqueSpecies = ['Human', 'Alien'],
  searchSpecies = [],
  handleSpeciesChange,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FilterByName
        handleNameChange={handleNameChange}
        searchName={searchName}
      />
      <FilterBySpecies
        uniqueSpecies={uniqueSpecies}
        handleSpeciesChange={handleSpeciesChange}
        searchSpecies={searchSpecies}
      />
    </form>
  );
}

Filters.propTypes = {
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  uniqueSpecies: PropTypes.array,
  searchSpecies: PropTypes.array.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
};

export default Filters;
