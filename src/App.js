import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import Search from './components/Search';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: " first note",
      date:"10/17/2023 | 1:04:32 PM",
      active: false,
      done: false
    },
    {
      id: 2,
      text: " my second note all with date",
      date: "10/17/2023 | 1:04:32 PM",
      active: false,
      done: false
    },
    {
      id: 3,
      text: "note",
      date: "10/17/2023 | 1:04:32 PM",
      active: false,
      done: false
    },

  ]);

  const [searchNote, setSearchNote] = useState('');
  const [current, setCurrent] = useState(0);
  const [pagesNotes, setPagesNotes] = useState(4);




  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(notes))
  }, [notes])

const handelPage = (direction)=>{
let shallowNotes = notes;

if(direction === 'next'){
  /* if(direction === 'next' && shallowNotes.length()> 4 ){ shallowNotes.slice(current,current+pagesNotes)
    setCurrent(prev=>prev+4)
    console.log(current,shallowNotes)} */
    return null

}


}


  const editNote = (text, id, active, done) => {
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
      id: Math.floor(Math.random()*15), text: text, date: date.toLocaleDateString() + " | " + date.toLocaleTimeString(), active: false,
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
          <div className='pagination'> 
            <AiOutlineArrowLeft  onClick={()=>handelPage('next')} />
            <AiOutlineArrowRight onClick={()=>handelPage('pre')}  />
          </div>
      </div>

    </div>

  )
}

export default App
