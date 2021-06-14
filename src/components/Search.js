import React from 'react'
import {MdSearch} from 'react-icons/md'

function Search() {
    return (
        <div className="search">
            <MdSearch
                className="searc-icon"
                size="1.3em"
            />
            <input type="text" className="search-input" placeholder="Search your notes..."></input>
        </div>
    )
}

export default Search
