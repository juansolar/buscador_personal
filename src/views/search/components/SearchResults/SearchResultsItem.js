import React from 'react'

import "./SearchResultsItem.css"

const SearchResultsItem = ({name, username, email,phone,website, address}) => {
  return (
    <div className='searchResults-show' > 
      <div className='searchResults-items'>
        <p>Name:</p>
        <p>Username:</p>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Website:</p>
        <p>City:</p>
      </div>
      <div className='searchResults-results'>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <p>{address.city} -{address.street}</p>
      </div>
    </div>
  )
}

export default SearchResultsItem