const FilterByName = ({ searchName = '', handleNameChange }) => {
  const handleChange = (event) => {
    handleNameChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="name">
        Character name:
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={searchName}
        />
      </label>
    </>
  );
};
export default FilterByName;
