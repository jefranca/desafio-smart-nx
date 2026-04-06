import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import { useCharacters } from './contexts/CharactersContext';
import './styles/main-page.css';

const ITEMS_PER_PAGE = 10;

function App() {
  const { characters, isLoading, errorMessage } = useCharacters();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(normalizedSearchTerm)
  );
  const totalPages = Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCharacters = filteredCharacters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [normalizedSearchTerm]);

  return (
    <main className="app">
      <section className="page-content">
        <header className="page-header">
          <div className="brand-name">
            <span className="brand-name-smart">smart</span>
            <span className="brand-name-nx">nx</span>
          </div>
          <h1>Personagens de Star Wars</h1>
        </header>

        <section className="filter-bar">
          <label className="filter-field" htmlFor="character-search">
            <span>Filtrar por nome</span>
            <input
              id="character-search"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Ex.: Luke, Leia, Vader..."
              type="text"
              value={searchTerm}
            />
          </label>
        </section>

        <section className="summary-bar">
          <div className="summary-card">
            <span>Total carregado</span>
            <strong>{characters.length}</strong>
          </div>
          <div className="summary-card">
            <span>Resultados</span>
            <strong>{filteredCharacters.length}</strong>
          </div>
          <div className="summary-card">
            <span>Pagina atual</span>
            <strong>
              {totalPages > 0 ? currentPage : 0}
              {totalPages > 0 ? `/${totalPages}` : ''}
            </strong>
          </div>
        </section>

        {isLoading ? (
          <p className="message">Carregando personagens...</p>
        ) : errorMessage ? (
          <p className="message message-error">{errorMessage}</p>
        ) : filteredCharacters.length === 0 ? (
          <div className="empty-state">
            <h2>Nenhum personagem encontrado</h2>
            <p>Tente buscar por outro nome para ver os resultados.</p>
          </div>
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
