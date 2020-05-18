import React, { Fragment, useState } from 'react';

import PokemonItem from './PokemonItem';
import { Link } from 'react-router-dom';

const PokemonList = ({pokeCards, error, loading, listOfTypes, renderAgain}) => {

  const [typesSelected, setTypes] = useState([]);

  if (error) {
    return (
      <div className="alert alert-danger">
        <strong>Error!</strong> There was a problem fetching your pokecards.
      </div>
    );
  }
  
  if (loading) {
    return ( 
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const updateTypes = (e) => {
    if (e.target.checked) {
      setTypes([...typesSelected, e.target.value]);
    } else {
      setTypes(typesSelected.filter(type => type !== e.target.value));
    }
  }

  const makeASearch = () => {
    renderAgain(typesSelected);
    setTypes([]);
  }

  return (
    <Fragment>
      <div className="row" style={{display: 'grid', gridTemplate: 'repeat(4, 1fr) / repeat(3, 1fr)' }}>
        {listOfTypes.map(type =>
          <div key={type}>
            <input type="checkbox" id={type} value={type} onClick={updateTypes} />
            <label htmlFor={type}>{type}</label>
          </div>
        )}
      </div>
      {listOfTypes.length > 0
        ? <div className="row" style={{ display:'flex', justifyContent: 'center' }}>
            <Link to={`/pokemons?types=${typesSelected.join('|')}`}><button onClick={makeASearch}>Filter by types</button></Link>
          </div>
        : null
      }
      <div className="row"> 
        {pokeCards.map(card => {
          return (
            <PokemonItem  
              card={card} 
              key={card.id} />
          )
        })}
      </div>
    </Fragment>
  );
}

export default PokemonList;