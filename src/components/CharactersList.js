import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

function CharactersList({ data = [], searchName = '', searchSpecies = '' }) {
  const renderCharacters = data.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/character/${character.id}`}>
          <CharacterItem character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section>
      <ul>
        {renderCharacters.length > 0
          ? renderCharacters
          : "We couldn't find any character with those search parameters."}
      </ul>
    </section>
  );
}
export default CharactersList;
