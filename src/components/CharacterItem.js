function CharacterItem({ character, children }) {
  return (
    <article>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h3>{character.species}</h3>
      {children}
    </article>
  );
}
export default CharacterItem;
