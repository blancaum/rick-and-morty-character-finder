import '../styles/components/CharacterItem.scss';

function CharacterItem({ character, children }) {
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
export default CharacterItem;
