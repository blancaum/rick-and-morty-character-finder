import '../styles/components/FilterByName.scss';

function FilterByName({ searchName = '', handleNameChange }) {
  const handleChange = (event) => {
    handleNameChange(event.target.value);
  };

  return (
    <fieldset className="form__name">
      <label htmlFor="name">Character name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={searchName}
        className="form__name__input"
      />
    </fieldset>
  );
}
export default FilterByName;
