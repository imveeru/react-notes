import React,{useState} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'

function App() {

  const [notes, setNotes] = useState([
    {
      id:nanoid(),
      text:"1 Note!",
      date:"14/06/2021"
    },
    {
      id:nanoid(),
      text:"2 Note!",
      date:"15/06/2021"
    },
    {
      id:nanoid(),
      text:"3 Note!",
      date:"16/06/2021"
    }
  ])

  const [searchText,setSearchText]=useState('')

  const addNote=(text)=>{
    const date=new Date()
    const newNote={
      id:nanoid(),
      text: text,
      date:date.toLocaleDateString()
    }

    const newNotes=[...notes,newNote]

    setNotes(newNotes)
  }

  const deleteNote=(id) => {
    const newNotes=notes.filter((note)=>note.id!==id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <h2>Notes</h2>
      <Search handleSearchNote={setSearchText}/>
      <NotesList
        notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText.toLowerCase()
        ))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
       />
    </div>
  )
}

export default App
