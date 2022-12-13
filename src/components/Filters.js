import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import '../styles/components/Filters.scss';

function Filters({
  searchName = '',
  handleNameChange,
  uniqueSpecies = [],
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
export default Filters;
