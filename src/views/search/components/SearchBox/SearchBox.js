import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import "./searchBox.css";

const SearchBox = ({onSearch, onClose, isAtTop}) => {

    const [search, setSearch] = useState("")

    const handleOnClickClose = () =>{
        setSearch("");
        onClose();
    }

    useEffect( () =>{
        onSearch(search);
        if(search.length == 0){
            return onClose();
        }
    }, [search]);

    return (
        <div className='search-box'>
            <h2 className='search-box-title'>Buscador de personal</h2>
            {/* {ele} */}
            <div className='search-box-buttons'>
                <label>
                    <input 
                        value={search} 
                        onChange={({target: {value}}) => setSearch(value)}
                        className='search-box-input'/>
                </label>
                <button 
                    onClick={() => onSearch(search)} 
                    disabled={isAtTop}>Buscar</button>
                <button onClick={handleOnClickClose} disabled={!isAtTop}>Cerrar</button>
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    onSearch: PropTypes.func,
    onClose: PropTypes.func
}

export default SearchBox