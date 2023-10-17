import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import { FcProcess } from 'react-icons/fc'
import { IoMdDoneAll } from 'react-icons/io'
import { MdWatchLater } from 'react-icons/md'
import AddNote from './AddNote'



function Note({ id, text, date, handleDelete, handleEdit, active, done }) {
    const [edit, setEdit] = useState(false);
    return (
        <div className="note">
            {!edit && (<span>{text}</span>)}
            {edit && <AddNote setEdit={setEdit} edit={edit} active={active} done={done} handleEdit={handleEdit} id={id} text={text} />}
            <div className="note-footer">
                <small>{date}</small>
                <BiEditAlt onClick={() => setEdit(!edit)} className={`delete-icon ${edit && 'green'}`} size="1.3em" />
                {active && !done && <FcProcess onClick={() => handleEdit(text, id, !active, done)} className="delete-icon" size="1.3em" />}
                {!active && <MdWatchLater onClick={() => handleEdit(text, id, !active, done)} className="delete-icon" size="1.3em" />}
                {<IoMdDoneAll onClick={() => handleEdit(text, id, active, !done)} className={`delete-icon ${done && 'green'}`} size="1.3em" />}
                <MdDeleteForever onClick={() => handleDelete(id)} className="delete-icon" size="1.3em" />
            </div>

        </div>
    )
}

export default Note
