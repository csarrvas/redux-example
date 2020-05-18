import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  fetchRequest,
  fetchByTypeRequest,
  fetchTypesRequest,
  fetchTypesSuccess,
  fetchTypesError
} from '../../actions/pokemon.action';

import { fetchPokemonTypesApi } from '../../api/pokemon.api';

import PokemonListComponent  from '../../components/pokemons/PokemonList';

class  PokemonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      some: 'some',
    }
  }

  componentDidMount(){
    const { 
      fetchPokemonList,
      fetchPokemonListByTypes,
      fetchListOfTypes,
      fetchListOfTypesSuccess,
      fetchListOfTypesError,
      location
    } = this.props;

    if (this.props.listOfTypes.length === 0) {
      fetchListOfTypes();
      fetchPokemonTypesApi()
        .then(({ types: listOfTypes }) => {
          fetchListOfTypesSuccess(listOfTypes);
        })
        .catch(err => {
          fetchListOfTypesError();
          console.log('err', err);
        });
    }
    if (location.search.includes('?types=')) {
      const types = (location.search.replace('?types=','')).split('|');
      fetchPokemonListByTypes(types);
    } else {
      fetchPokemonList();
    }
  }

  renderAgain = (typesSelected) => {
    const { 
      fetchPokemonList,
      fetchPokemonListByTypes,
      location
    } = this.props;
    if (location.search.includes('?types=')) {
      // const types = (location.search.replace('?types=','')).split('|');
      const types = typesSelected;
      fetchPokemonListByTypes(types);
    } else {
      fetchPokemonList();
    }
  }

  render() {
    const { error, loading, pokeCards, listOfTypes } = this.props;
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <PokemonListComponent 
            error={error} 
            loading={loading}
            pokeCards={pokeCards}
            listOfTypes={listOfTypes}
            renderAgain={this.renderAgain}/>
        </div>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonList: () => dispatch(fetchRequest()),
    fetchPokemonListByTypes: (types) => dispatch(fetchByTypeRequest(types)),
    fetchListOfTypes: () => dispatch(fetchTypesRequest()),
    fetchListOfTypesSuccess: (listOfTypes) => dispatch(fetchTypesSuccess(listOfTypes)),
    fetchListOfTypesError: () => dispatch(fetchTypesError())
  }
}

const mapStateToProps = (state) =>{
  const {error, loading, list, types} = state.pokemons;
  return {
    error,
    loading,
    pokeCards: list,
    listOfTypes: types
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
