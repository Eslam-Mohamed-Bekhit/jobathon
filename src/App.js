import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is my first note",
      date: "07/9/2023",
      active: false,
      done: false
    },
    {
      id: 2,
      text: "This is my second note",
      date: "03/10/2023",
      active: false,
      done: false
    },
    {
      id: 3,
      text: "This is my third note",
      date: "03/5/2023",
      active: false,
      done: false
    },

  ]);

  const [searchNote, setSearchNote] = useState('');




  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(notes))
  }, [notes])




 



  const editNote = (text, id, active, done) => {
    console.log("fr::", text, id)
    const date = new Date();
    const newNote = {
      id, text: text, date: date.toLocaleDateString() + " | " + date.toLocaleTimeString(), active,
      done
    }
    let newNotes = notes.filter(note => note.id !== id)
    setNotes([...newNotes, newNote])
  }



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.floor(Math.random*15), text: text, date: date.toLocaleDateString() + " | " + date.toLocaleTimeString(), active: false,
      done: false
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }


  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }


  return (

    <div className='dark-mode'>
      <div className="container">


        <Notes handleEdit={editNote} notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deletingNote} />
        <Search handleSearch={setSearchNote} />

      </div>

    </div>

  )
}

export default App
