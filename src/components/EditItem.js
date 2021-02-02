import React from 'react'
import { useState } from 'react'

const EditItem = ({onEdit, grocery, index}) => {
    const [editInput, setEditInput] = useState(grocery.name);
    const editItem = (event) => {
        event.preventDefault();
        onEdit(index, editInput);
        setEditInput('');
    }

    return (
        <>
            <form className='edit-form' onSubmit={editItem}>
                <input type="text" value={editInput} onChange={(event) => setEditInput(event.target.value)}/>
                <input type="submit" value='Save' className='btn'/>
            </form>
        </>
    )
}

export default EditItem
