import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

function SearchBar({searchText, handleSearchText}) {
  return (
    <div className='search-box'>

<BiSearchAlt2 />
<input value={searchText} onChange={(e)=>handleSearchText(e.target.value)} type="text" placeholder='search...' />
    </div>
  )
}

export default SearchBar