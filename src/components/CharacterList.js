import CharacterCard from './CharacterCard';
import '../styles/character-list.css';

function CharacterList({ characters }) {
  return (
    <ul className="character-list">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.url} />
      ))}
    </ul>
  );
}

export default CharacterList;
