import React from 'react'
import {BsMoon} from 'react-icons/bs'
import {MdWbSunny} from 'react-icons/md'

function Header({handleDarkMode,darkMode}) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                className="togg-btn"
                onClick={()=>handleDarkMode(previous=>!previous)}
            >{!darkMode?<BsMoon size="1.3em"/>:<MdWbSunny className="sun-icon" size="1.3em"/>}</button>
        </div>
    )
}

export default Header
