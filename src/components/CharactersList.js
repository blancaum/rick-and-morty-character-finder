import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

function CharactersList({ data = [], searchName = '' }) {
  const renderCharacters = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .map((character) => {
      return (
        <li key={character.id}>
          <Link
            to={`/character/${character.id}/${character.name}/${character.species}/${character.origin}/${character.location}/${character.episode.length}/${character.status}`}>
            <CharacterItem character={character} />
          </Link>
        </li>
      );
    });
  console.log(renderCharacters);

  return (
    <section>
      <ul>
        {renderCharacters.length > 0
          ? renderCharacters
          : "We couldn't find any character named " + searchName + '.'}
      </ul>
    </section>
  );
}
export default CharactersList;
