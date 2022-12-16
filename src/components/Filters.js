import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByPlanet from './FilterByPlanet';
import '../styles/components/Filters.scss';
import PropTypes from 'prop-types';
import Reset from './Reset';

function Filters({
  searchName = '',
  handleNameChange,
  uniqueSpecies = ['Human', 'Alien'],
  searchSpecies = [],
  handleSpeciesChange,
  handleResetClick,
  comparePlanet,
  handleComparePlanetChange,
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
      <FilterByPlanet
        comparePlanet={comparePlanet}
        handleComparePlanetChange={handleComparePlanetChange}
      />
      <Reset handleResetClick={handleResetClick} />
    </form>
  );
}

Filters.propTypes = {
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  uniqueSpecies: PropTypes.array,
  searchSpecies: PropTypes.array.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  comparePlanet: PropTypes.bool.isRequired,
  handleComparePlanetChange: PropTypes.func.isRequired,
};

export default Filters;
