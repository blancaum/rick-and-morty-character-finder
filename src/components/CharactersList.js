import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterList.scss';
import PropTypes from 'prop-types';
import errorImages from './ErrorImages';

function CharactersList({ data = [], getRandomNumber }) {
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

  const errorImageIndex = getRandomNumber(errorImages.length - 1);

  return (
    <>
      {renderCharacters.length > 0 ? (
        <section className="characters">
          <ul className="characters__list">{renderCharacters}</ul>
        </section>
      ) : (
        <section className="error">
          <p className="error__text">
            We couldn't find any character with those search parameters 😢
          </p>
          <img
            className="error__image"
            src={errorImages[errorImageIndex]}
            alt="Sad gif because we didn't find any character"
          />
        </section>
      )}
    </>
  );
}

CharactersList.propTypes = {
  data: PropTypes.array.isRequired,
  getRandomNumber: PropTypes.func.isRequired,
};

export default CharactersList;
