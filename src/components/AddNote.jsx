import React, { useState } from 'react'
function AddNote({ handleAddNote, handleEdit, id, edit, setEdit, text, active, done }) {
    const [noteText, setNoteText] = useState(edit ? text : '');
   
    const charLimit = 300;
    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }

    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && !edit) {
            handleAddNote(noteText);
            setNoteText('');
        } else if (noteText.trim().length > 0 && edit) {
            handleEdit(noteText, id, active, done);
            setEdit(false)
            setNoteText('');
        }

    }
    return (
        <div className="note new">
            <textarea cols="10" rows="2" placeholder="Type to add a new note..."
                onChange={handleChange} value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}> {edit ? 'Edit' : 'Save'}</button>
            </div>
        </div>
    )
}

export default AddNote
