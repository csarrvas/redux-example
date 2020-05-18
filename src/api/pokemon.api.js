const baseURL = process.env.REACT_APP_POKEMON_URL;

export function fetchPokemonListApi() {
  return fetch(`${baseURL}/cards`).then(response => response.json());
}

export function fetchPokemonDetailApi(id) {
  return fetch(`${baseURL}/cards/${id}`).then(response => response.json());
}


export function fetchPokemonTypesApi() {
  return fetch(`${baseURL}/types`).then(response => response.json());
}

export function fetchPokemonListByTypesApi(typesArray) {
  const types = typesArray.join('|');
  return fetch(`${baseURL}/cards?types=${types}`).then(response => response.json());
}