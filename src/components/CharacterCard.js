import '../styles/character-card.css';

function CharacterCard({ character }) {
  return (
    <li className="character-item">
      <div className="character-card-top">
        <span className="character-badge">{character.gender}</span>
        <span className="character-badge">{character.birth_year}</span>
      </div>

      <strong>{character.name}</strong>

      <dl className="character-details">
        <div className="character-detail-row">
          <dt>Altura</dt>
          <dd>{character.height} cm</dd>
        </div>
        <div className="character-detail-row">
          <dt>Peso</dt>
          <dd>{character.mass} kg</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor do cabelo</dt>
          <dd>{character.hair_color}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor da pele</dt>
          <dd>{character.skin_color}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor dos olhos</dt>
          <dd>{character.eye_color}</dd>
        </div>
      </dl>
    </li>
  );
}

export default CharacterCard;
