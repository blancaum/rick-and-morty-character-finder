import { Link, useParams } from 'react-router-dom';
import CharacterItem from './CharacterItem';

function CharacterDetail({ data }) {
  const { characterId } = useParams();

  const selectedCharacter = data.filter(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  return (
    <>
      {selectedCharacter.length > 0 ? (
        <CharacterItem character={selectedCharacter[0]}>
          <p>{`Origin: ${selectedCharacter[0].origin}`}</p>
          <p>{`Location: ${selectedCharacter[0].location}`}</p>
          <p>{`Number of episodes: ${selectedCharacter[0].episode.length}`}</p>
          <p>{`Status: ${selectedCharacter[0].status}`}</p>
          <Link to="/">Go back...</Link>
        </CharacterItem>
      ) : (
        <>
          <p>ERROR: character not found.</p> <Link to="/">Go home</Link>
        </>
      )}
    </>
  );
}
export default CharacterDetail;
