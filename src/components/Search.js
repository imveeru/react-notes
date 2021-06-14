import React from 'react'
import {MdSearch} from 'react-icons/md'

function Search({handleSearchNote}) {



    return (
        <div className="search">
            <MdSearch
                className="searc-icon"
                size="1.3em"
            />
            <input
                type="text"
                onChange={e=>handleSearchNote(e.target.value)}
                className="search-input"
                placeholder="Search your notes..."
            />
        </div>
    )
}

export default Search
