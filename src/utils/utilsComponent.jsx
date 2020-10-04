import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './utilsComponent.scss';

export const SearchInput = (props)=> {
    return(
        <div className='search-input-container'>
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
                </button>
        </div>
    )
}