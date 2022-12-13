import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

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
    <form onSubmit={handleSubmit}>
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
