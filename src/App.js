import React,{useState,useEffect} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

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
  
  //Searching
  const [searchText,setSearchText]=useState('')

  //Dark Mode
  const [darkMode,setDarkMode]=useState(false)

  //Retrieving data from local storage
  useEffect(()=>{
    const savedNotes=JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )
    
    //Setting retrieved data to state.
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

  //Storing data in local storage
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])

  //Add note
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

  //Delete Note
  const deleteNote=(id) => {
    const newNotes=notes.filter((note)=>note.id!==id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode?'dark-mode':null}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText.toLowerCase()
          ))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
