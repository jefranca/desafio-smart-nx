import CharacterList from './components/CharacterList';
import { useCharacters } from './contexts/CharactersContext';
import './styles/main-page.css';

function App() {
  const { characters, isLoading, errorMessage } = useCharacters();

  return (
    <main className="app">
      <section className="card">
        <div className="eyebrow">
          <span>Desafio Tecnico  </span>
          <span className="brand-name">
            <span className="brand-name-smart">smart</span>
            <span className="brand-name-nx">nx</span>
          </span>
        </div>
        <h1>Personagens de Star Wars</h1>

        {isLoading ? (
          <p>Carregando personagens...</p>
        ) : errorMessage ? (
          <p className="message message-error">{errorMessage}</p>
        ) : (
          <>
            <p className="message">
              Total de personagens carregados: {characters.length}
            </p>

            <CharacterList characters={characters} />
          </>
        )}
      </section>
    </main>
  );
}

export default App;
