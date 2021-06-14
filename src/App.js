import React,{useState,useEffect} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

function App() {

  //Notes Data
  const [notes, setNotes] = useState([])
  
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
        <Header darkMode={darkMode} handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText.toLowerCase()
          ))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        {notes.length<=0?<h2 className="empty-msg">Add your notes...</h2>:null}
      </div>
    </div>
  )
}

export default App
