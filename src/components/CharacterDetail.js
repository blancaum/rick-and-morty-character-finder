import { Link, useParams } from 'react-router-dom';
import CharacterItem from './CharacterItem';

function CharacterDetail({ data }) {
  const { characterId } = useParams();

  console.log(characterId);

  const selectedCharacter = data.filter(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  console.log(selectedCharacter);

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

// import { Link, useParams } from 'react-router-dom';
// import CharacterItem from './CharacterItem';

// function CharacterDetail() {
//   const {
//     characterId,
//     characterName,
//     characterSpecies,
//     characterOrigin,
//     characterLocation,
//     characterEpisodes,
//     characterStatus,
//   } = useParams();

//   const selectedCharacter = {
//     id: characterId,
//     name: characterName,
//     species: characterSpecies,
//     image: '',
//     origin: characterOrigin,
//     location: characterLocation,
//     episode: characterEpisodes,
//     status: characterStatus,
//   };

//   return (
//     <CharacterItem character={selectedCharacter}>
//       <p>{`Origin: ${selectedCharacter.origin}`}</p>
//       <p>{`Location: ${selectedCharacter.location}`}</p>
//       <p>{`Number of episodes: ${selectedCharacter.episode}`}</p>
//       <p>{`Status: ${selectedCharacter.status}`}</p>
//       <Link to="/">Go back...</Link>
//     </CharacterItem>
//   );
// }
// export default CharacterDetail;
