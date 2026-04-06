import '../styles/character-card.css';
import {
  translateEyeColor,
  translateGender,
  translateHairColor,
  translateSkinColor,
} from '../services/characterTranslations';

function formatWeight(value) {
  if (!value || value.toLowerCase() === 'unknown') {
    return 'desconhecido';
  }

  return `${value} kg`;
}

function formatHeight(value) {
  if (!value || value.toLowerCase() === 'unknown') {
    return 'desconhecido';
  }

  return `${value} cm`;
}

function formatBirthYear(value) {
  if (!value || value.toLowerCase() === 'unknown') {
    return 'desconhecido';
  }

  return value;
}

function CharacterCard({ character }) {
  return (
    <li className="character-item">
      <div className="character-card-top">
        <span className="character-badge">
          {translateGender(character.gender)}
        </span>
        <span className="character-badge">
          {formatBirthYear(character.birth_year)}
        </span>
      </div>

      <strong>{character.name}</strong>

      <dl className="character-details">
        <div className="character-detail-row">
          <dt>Altura</dt>
          <dd>{formatHeight(character.height)}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Peso</dt>
          <dd>{formatWeight(character.mass)}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor do cabelo</dt>
          <dd>{translateHairColor(character.hair_color)}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor da pele</dt>
          <dd>{translateSkinColor(character.skin_color)}</dd>
        </div>
        <div className="character-detail-row">
          <dt>Cor dos olhos</dt>
          <dd>{translateEyeColor(character.eye_color)}</dd>
        </div>
      </dl>
    </li>
  );
}

export default CharacterCard;
