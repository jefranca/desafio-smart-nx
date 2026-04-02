import { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllCharacters } from '../services/swapi';

const CharactersContext = createContext(null);

function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadCharacters() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const allCharacters = await fetchAllCharacters(controller.signal);
        setCharacters(allCharacters);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErrorMessage(
            'Ocorreu um erro ao carregar os personagens. Tente novamente.'
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadCharacters();

    return () => {
      controller.abort();
    };
  }, []);

  const value = {
    characters,
    isLoading,
    errorMessage,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
}

function useCharacters() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('Erro ao usar useCharacters.');
  }

  return context;
}

export { CharactersProvider, useCharacters };
