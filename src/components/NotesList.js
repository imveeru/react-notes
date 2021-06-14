import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({notes}) {
    return (
        <div className="notes-list">
            <AddNote/>
            {
                notes.map((note)=>(
                    <Note 
                        id={note.id}
                        text={note.text}
                        date={note.date}
                    />
                ))
            }
        </div>
    )
}

export default NotesList
