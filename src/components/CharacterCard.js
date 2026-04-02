import '../styles/character-card.css';

function CharacterCard({ character }) {
  return (
    <li className="character-item">
      <strong>{character.name}</strong>

      <div className="character-details">
        <span>Altura: {character.height} cm</span>
        <span>Peso: {character.mass} kg</span>
        <span>Ano de nascimento: {character.birth_year}</span>
        <span>Genero: {character.gender}</span>
        <span>Cor do cabelo: {character.hair_color}</span>
        <span>Cor da pele: {character.skin_color}</span>
        <span>Cor dos olhos: {character.eye_color}</span>
      </div>
    </li>
  );
}

export default CharacterCard;
