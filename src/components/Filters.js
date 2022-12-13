import FilterByName from './FilterByName';

function Filters({ searchName = '', handleNameChange }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleNameChange={handleNameChange}
        searchName={searchName}
      />
    </form>
  );
}
export default Filters;
