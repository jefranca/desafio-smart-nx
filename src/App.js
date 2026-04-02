import CharacterList from './components/CharacterList';
import { useCharacters } from './contexts/CharactersContext';
import './styles/main-page.css';

function App() {
  const { characters, isLoading, errorMessage } = useCharacters();

  return (
    <main className="app">
      <section className="card">
        <span className="eyebrow">Desafio Tecnico Smart Nx</span>
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
