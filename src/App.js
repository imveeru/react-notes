import React,{useState} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'

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

  return (
    <div className="container">
      <h2>Notes</h2>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App
