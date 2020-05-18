export const types = {
  FETCH_POKEMON_LIST_FAILURE: 'POKEMON/FETCH_LIST_FAILURE',
  FETCH_POKEMON_LIST_REQUEST: 'POKEMON/FETCH_LIST_REQUEST',
  FETCH_POKEMON_LIST_SUCCESS: 'POKEMON/FETCH_LIST_SUCCESS',
  FETCH_POKEMON_FAILURE: 'POKEMON/FETCH_FAILURE',
  FETCH_POKEMON_REQUEST: 'POKEMON/FETCH_REQUEST',
  FETCH_POKEMON_SUCCESS: 'POKEMON/FETCH_SUCCESS',

  FETCH_POKEMON_LIST_BY_TYPE_FAILURE: 'POKEMON/FETCH_LIST_BY_TYPE_FAILURE',
  FETCH_POKEMON_LIST_BY_TYPE_REQUEST: 'POKEMON/FETCH_LIST_BY_TYPE_REQUEST',
  FETCH_POKEMON_LIST_BY_TYPE_SUCCESS: 'POKEMON/FETCH_LIST_BY_TYPE_SUCCESS',
  FETCH_POKEMON_TYPES_FAILURE: 'POKEMON/FETCH_TYPES_FAILURE',
  FETCH_POKEMON_TYPES_REQUEST: 'POKEMON/FETCH_TYPES_REQUEST',
  FETCH_POKEMON_TYPES_SUCCESS: 'POKEMON/FETCH_TYPES_SUCCESS',
};

export function fetchRequest() {
  return {
    type: types.FETCH_POKEMON_LIST_REQUEST,
  }
}

export function fetchError() {
  return {
    type: types.FETCH_POKEMON_LIST_FAILURE,
  }
}

export function fetchSuccess(list) {
  return {
    type: types.FETCH_POKEMON_LIST_SUCCESS,
    payload: {list}
  }
}

export function fetchDetailRequest() {
  return {
    type: types.FETCH_POKEMON_REQUEST,
  }
}

export function fetchDetailSuccess(selected) {
  return {
    type: types.FETCH_POKEMON_SUCCESS,
    payload: {selected}
  }
}

export function fetchDetailError() {
  return {
    type: types.FETCH_POKEMON_FAILURE,
  }
}


export function fetchTypesRequest() {
  return {
    type: types.FETCH_POKEMON_TYPES_REQUEST,
  }
}

export function fetchTypesSuccess(listOfTypes) {
  return {
    type: types.FETCH_POKEMON_TYPES_SUCCESS,
    payload: { listOfTypes }
  }
}

export function fetchTypesError() {
  return {
    type: types.FETCH_POKEMON_TYPES_FAILURE,
  }
}

export function fetchByTypeRequest(listOfTypes) {
  return {
    type: types.FETCH_POKEMON_LIST_BY_TYPE_REQUEST,
    payload: { listOfTypes }
  }
}

export function fetchByTypeSuccess(listByTypes) {
  return {
    type: types.FETCH_POKEMON_LIST_BY_TYPE_SUCCESS,
    payload: { listByTypes }
  }
}

export function fetchByTypeError() {
  return {
    type: types.FETCH_POKEMON_LIST_BY_TYPE_FAILURE,
  }
}