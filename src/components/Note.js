import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note() {
    return (
        <div className="note">
            <span>First Note!</span>
            <div className="note-footer">
                <small>14/06/2021</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    )
}

export default Note
