import { types } from '../actions/pokemon.action';

const initialState = {
  list: [],
  selected: null,
  error: false,
  loading: false,
  types: [],
};

export default function(state = initialState, action){

  switch (action.type) {
    case types.FETCH_POKEMON_LIST_REQUEST:
      return {...state, loading: true, error: false};

    case types.FETCH_POKEMON_LIST_SUCCESS:
      const { list } = action.payload;
      return {...state, list, error: false, loading: false}; 

    case types.FETCH_POKEMON_LIST_FAILURE:
      return {...state, error: true};
    
    case types.FETCH_POKEMON_REQUEST:
      return {...state, loading: true, error: false};

    case types.FETCH_POKEMON_SUCCESS:
      const { selected } = action.payload;
      return {...state, selected, error: false, loading: false}; 

    case types.FETCH_POKEMON_FAILURE:
      return {...state, error: true};
    
    
    case types.FETCH_POKEMON_TYPES_REQUEST:
      return {...state, loading: true, error: false};
    
    case types.FETCH_POKEMON_TYPES_SUCCESS:
      const { listOfTypes } = action.payload;
      return {...state, loading: false, error: false, types: listOfTypes}

    case types.FETCH_POKEMON_TYPES_FAILURE:
      return {...state, error: true};

    case types.FETCH_POKEMON_LIST_BY_TYPE_REQUEST:
      return {...state, loading: true, error: false}
    
    case types.FETCH_POKEMON_LIST_BY_TYPE_SUCCESS:
      const { listByTypes } = action.payload;
      return {...state, loading: false, error: false, list: listByTypes}
    
    case types.FETCH_POKEMON_LIST_BY_TYPE_FAILURE:
      return {...state, loading: false, error: true}

    default:
      return state;
  }
}

