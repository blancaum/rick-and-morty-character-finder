import CharacterItem from './CharacterItem';

function CharactersList({ data = [], searchName = '' }) {
  const renderCharacters = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .map((character) => {
      return <CharacterItem key={character.id} character={character} />;
    });

  return (
    <section>
      <ul>{renderCharacters}</ul>
    </section>
  );
}
export default CharactersList;
