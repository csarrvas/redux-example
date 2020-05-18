import { call, put, takeEvery } from 'redux-saga/effects';
// import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  types,
  fetchSuccess as fetchPokemonListSuccessAction,
  fetchError as fetchPokemonListErrorAction,
  fetchByTypeSuccess as fetchPokemonListByTypesSuccessAction,
  fetchByTypeError as fetchPokemonListByTypesErrorAction
} from '../actions/pokemon.action';
import { fetchPokemonListApi, fetchPokemonListByTypesApi  } from '../api/pokemon.api';


export function* fetchPokemons() {
  try {
    const fetchPokemonListResponse = yield call(
      fetchPokemonListApi
    );
    yield put(fetchPokemonListSuccessAction(fetchPokemonListResponse.cards));
  } catch (e) {
    yield put(fetchPokemonListErrorAction());
  }
}

export function* fetchPokemonsByTypes({ payload }) {
  try {
    const fetchPokemonListByTypesResponse = yield call(
      fetchPokemonListByTypesApi, payload.listOfTypes
    );
    yield put(fetchPokemonListByTypesSuccessAction(fetchPokemonListByTypesResponse.cards));
  } catch (e) {
    yield put(fetchPokemonListByTypesErrorAction());
  }
}

export const pokemonSagas = [
  takeEvery(types.FETCH_POKEMON_LIST_REQUEST, fetchPokemons),
  takeEvery(types.FETCH_POKEMON_LIST_BY_TYPE_REQUEST, fetchPokemonsByTypes),
];