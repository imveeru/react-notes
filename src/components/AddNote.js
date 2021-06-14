import React,{useState} from 'react'

function AddNote({handleAddNote}) {

    const [noteText,setNoteText]=useState('')

    const handleChange=(e)=>{
        setNoteText(e.target.value)
    }

    const handleClick=()=>{
        handleAddNote(noteText)
    }

    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Add your notes here...'
                onChange={handleChange}
                value={noteText}
            ></textarea>

            <div className="note-footer">
                <small>100 Remaining</small>
                <button className="save-btn" onClick={handleClick} >Save</button>
            </div>
        </div>
    )
}

export default AddNote
