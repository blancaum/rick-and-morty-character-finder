import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterList.scss';

function CharactersList({ data = [], searchName = '', searchSpecies = '' }) {
  const renderCharacters = data.map((character) => {
    return (
      <li key={character.id} className="characters__list__item">
        <Link
          to={`/character/${character.id}`}
          className="characters__list__item--link">
          <CharacterItem character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section className="characters">
      <ul className="characters__list">
        {renderCharacters.length > 0
          ? renderCharacters
          : "We couldn't find any character with those search parameters."}
      </ul>
    </section>
  );
}
export default CharactersList;
