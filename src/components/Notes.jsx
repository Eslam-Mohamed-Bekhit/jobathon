import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const Notes = ({ notes, handleAddNote, handleDelete, handleEdit }) => {
    return (
        <div className="notes-list">
        <AddNote handleAddNote={handleAddNote} />
            {notes.map((note) =>
                <Note key={note.id} done={note.done} active={note.active} handleEdit={handleEdit} id={note.id} text={note.text} date={note.date}
                    handleDelete={handleDelete}
                />
            )}
            
        </div>
    )
}

export default Notes
