import React from 'react'
import PropTypes from 'prop-types'

import "./SearchResults.css";
import SearchResultsItem from './SearchResultsItem';

const SearchResults = ({results,isSearching}) => {

  return (
    <div className='searchResults'>
        {!results.length && isSearching && <p className='search-box-title'>No existen resultados</p> }

        {results?.map( (value) =>{
          return <SearchResultsItem 
                    key={value.id} 
                    {...value}/>
        })}
    </div>
  )
}

SearchResults.propTypes = {}

export default SearchResults