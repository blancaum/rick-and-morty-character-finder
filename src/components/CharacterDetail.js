import { Link, useParams } from 'react-router-dom';
import CharacterItem from './CharacterItem';
import '../styles/components/CharacterDetail.scss';
import PropTypes from 'prop-types';
import pickleImages from './PickleImages';

function CharacterDetail({ data = [], getRandomNumber }) {
  const { characterId } = useParams();

  const selectedCharacter = data.find(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  const pickleImageIndex = getRandomNumber(pickleImages.length - 1);

  return (
    <>
      {selectedCharacter ? (
        <section className="character-detail">
          <CharacterItem character={selectedCharacter}>
            <p>{`Origin: ${selectedCharacter.origin}`}</p>
            <p>{`Location: ${selectedCharacter.location}`}</p>
            <p>{`Number of episodes: ${selectedCharacter.episode.length}`}</p>
            <p>{`Status: ${selectedCharacter.status}`}</p>
            <Link to="/" className="character__link">
              Go back...
            </Link>
          </CharacterItem>
        </section>
      ) : (
        <section className="error">
          <p className="error__text">ERROR: character not found.</p>
          <img
            className="error__image"
            src={pickleImages[pickleImageIndex]}
            alt="Error, have a pickle Rick"
          />
          <Link to="/" className="error__link">
            Go home
          </Link>
        </section>
      )}
    </>
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.array.isRequired,
  getRandomNumber: PropTypes.func.isRequired,
};

export default CharacterDetail;
