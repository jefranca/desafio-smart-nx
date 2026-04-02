const PEOPLE_API_URL = 'https://swapi.py4e.com/api/people/';

async function fetchAllCharacters(signal) {
  const characters = [];
  let nextUrl = PEOPLE_API_URL;

  while (nextUrl) {
    const response = await fetch(nextUrl, { signal });

    if (!response.ok) {
      throw new Error('Nao foi possivel buscar os personagens.');
    }

    const data = await response.json();
    characters.push(...data.results);
    nextUrl = data.next;
  }

  return characters;
}

export { fetchAllCharacters };
