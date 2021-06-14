import React,{useState} from 'react'

function AddNote({handleAddNote}) {

    const [noteText,setNoteText]=useState('')
    const charLimit=200

    const handleChange=(e)=>{
        if(charLimit-e.target.value.length>=0){
            setNoteText(e.target.value)
        }
    }

    const handleClick=()=>{

        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')
        }
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
                <small>{charLimit-noteText.length} Remaining</small>
                <button className="save-btn" onClick={handleClick} >Save</button>
            </div>
        </div>
    )
}

export default AddNote
