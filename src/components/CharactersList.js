import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

function CharactersList({ data = [], searchName = '' }) {
  const renderCharacters = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .map((character) => {
      return (
        <Link to={`/character/${character.id}`}>
          <CharacterItem key={character.id} character={character} />
        </Link>
      );
    });

  return (
    <section>
      <ul>{renderCharacters}</ul>
    </section>
  );
}
export default CharactersList;
