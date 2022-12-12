function CharacterItem({ character }) {
  return (
    <li key={character.id}>
      <article>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </article>
    </li>
  );
}
export default CharacterItem;
