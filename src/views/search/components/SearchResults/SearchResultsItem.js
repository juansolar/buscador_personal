import React from 'react'

const SearchResultsItem = ({name, email}) => {
  return (
    <div className='searchResults-show' > 
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default SearchResultsItem