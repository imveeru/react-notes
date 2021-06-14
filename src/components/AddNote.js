import React from 'react'

function AddNote() {
    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Add your notes here...'
            >
            </textarea>
            <div className="note-footer">
                <small>100 Remaining</small>
                <button className="save-btn">Save</button>
            </div>
        </div>
    )
}

export default AddNote
