import React from 'react'

const Search = ({newSearch, handleSearchChange}) => {
    return (
        <>
            <div>
                filter shown with: <input value={newSearch} onChange = {handleSearchChange}/>
            </div>
        </>
    )
}

export default Search