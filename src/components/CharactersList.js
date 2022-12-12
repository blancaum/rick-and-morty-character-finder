import CharacterItem from './CharacterItem';

function CharactersList({ data }) {
  const renderCharacters = data.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <section>
      <ul>{renderCharacters}</ul>
    </section>
  );
}
export default CharactersList;
