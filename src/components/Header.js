import React from 'react'
import {BsMoon} from 'react-icons/bs'
import {MdWbSunny} from 'react-icons/md'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

function Header({handleDarkMode,darkMode}) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <Tippy content={<small>Dark/Light Mode Toggle</small>}>
                <button
                    className="togg-btn"
                    onClick={()=>handleDarkMode(previous=>!previous)}
                >{!darkMode?<BsMoon size="1.3em"/>:<MdWbSunny className="sun-icon" size="1.3em"/>}</button>
            </Tippy>
        </div>
    )
}

export default Header
