import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import { useCharacters } from './contexts/CharactersContext';
import './styles/main-page.css';

const ITEMS_PER_PAGE = 10;

function App() {
  const { characters, isLoading, errorMessage } = useCharacters();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCharacters = characters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
          <div className="summary-card">
            <span>Pagina atual</span>
            <strong>{totalPages > 0 ? currentPage : 0}</strong>
          </div>
        </section>

        {isLoading ? (
          <p className="message">Carregando personagens...</p>
        ) : errorMessage ? (
          <p className="message message-error">{errorMessage}</p>
        ) : (
          <>
            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalPages={totalPages}
              variant="top"
            />
            <CharacterList characters={paginatedCharacters} />
            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalPages={totalPages}
              variant="bottom"
            />
          </>
        )}
      </section>
    </main>
  );
}

export default App;
