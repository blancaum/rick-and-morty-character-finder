import { Link, useParams } from 'react-router-dom';
import CharacterItem from './CharacterItem';

function CharacterDetail({ data }) {
  const { characterId } = useParams();

  console.log(characterId);

  const selectedCharacter = data.filter(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  console.log(selectedCharacter);

  //   const renderFilms = () => {
  //     return selectedCharacter[0].films.map((film, index) => (
  //       <li key={index}>{film}</li>
  //     ));
  //   };

  return (
    <CharacterItem character={selectedCharacter[0]}>
      <p>{`Origin: ${selectedCharacter[0].origin}`}</p>
      <p>{`Location: ${selectedCharacter[0].location}`}</p>
      <p>{`Number of episodes: ${selectedCharacter[0].episode.length}`}</p>
      <p>{`Status: ${selectedCharacter[0].status}`}</p>
      <Link to="/">Go back...</Link>
    </CharacterItem>
  );
}
export default CharacterDetail;
