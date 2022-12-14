import '../styles/components/CharacterItem.scss';
import PropTypes from 'prop-types';

function CharacterItem({ character = {}, children }) {
  return (
    <article className="character">
      <img
        src={character.image}
        alt={character.name}
        className="character__image"
      />
      <h2 className="character__name">{character.name}</h2>
      <h3 className="character__species">{character.species}</h3>
      {children}
    </article>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterItem;
