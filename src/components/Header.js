import React from 'react'

function Header({handleDarkMode}) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                className="togg-btn"
                onClick={()=>handleDarkMode(previous=>!previous)}
            >Toggle</button>
        </div>
    )
}

export default Header
