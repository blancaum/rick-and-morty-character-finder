import { Link, useParams } from 'react-router-dom';
import CharacterItem from './CharacterItem';
import '../styles/components/CharacterDetail.scss';
import React from 'react';

function CharacterDetail({ data }) {
  const { characterId } = useParams();

  const selectedCharacter = data.find(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

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
        <>
          <p>ERROR: character not found.</p> <Link to="/">Go home</Link>
        </>
      )}
    </>
  );
}
export default CharacterDetail;
