import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SearchBox from './components/SearchBox/SearchBox';
import "./style.css";
// import data from '../../data/users.json';
import SearchResults from './components/SearchResults/SearchResults';

const Search = () => {

  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() =>{
    const getUsers = async () =>{
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(data);        
      } catch (error) { console.log(error) }
    };
    getUsers();
  },[])

  const handleCloseClick = () => {
    setIsAtTop(false);
    setResults([]);
  };
  const handleSearchClick = (searchText) =>{ 
    setIsAtTop(true);
    if(data?.length){
      const filteredData = data.filter( (value) =>{
        return ( value.name.toLowerCase().includes(searchText.toLowerCase()) 
          || value.email.includes(searchText.toLowerCase())
          || value.username.toLowerCase().includes(searchText.toLowerCase()) 
          || value.phone.toLowerCase().includes(searchText.toLowerCase()) );
      } );
      setResults(filteredData);
    }
  };

  return (
    <div className={`search ${isAtTop ? "search-top" : "search-center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isAtTop={isAtTop}/>
      <SearchResults results={results} isSearching={isAtTop}/>
    </div>
  )
}

export default Search;