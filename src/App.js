import CharacterList from './components/CharacterList';
import { useCharacters } from './contexts/CharactersContext';
import './styles/main-page.css';

function App() {
  const { characters, isLoading, errorMessage } = useCharacters();

  return (
    <main className="app">
      <section className="page-content">
        <header className="page-header">
          <div className="eyebrow">
            <span>Desafio Tecnico</span>
            <span className="brand-name">
              <span className="brand-name-smart">smart</span>
              <span className="brand-name-nx">nx</span>
            </span>
          </div>
          <h1>Personagens de Star Wars</h1>
        </header>

        <section className="summary-bar">
          <div className="summary-card">
            <span>Total carregado</span>
            <strong>{characters.length}</strong>
          </div>
        </section>

        {isLoading ? (
          <p className="message">Carregando personagens...</p>
        ) : errorMessage ? (
          <p className="message message-error">{errorMessage}</p>
        ) : (
          <CharacterList characters={characters} />
        )}
      </section>
    </main>
  );
}

export default App;
