import React from 'react'
import { useState } from 'react'

const AddItem = ({onAdd}) => {
    const [newItem, setNewItem] = useState('');

    const itemAdd = (e) => {
        e.preventDefault();
        onAdd(newItem);
        setNewItem('');
    }

    return (
        <div>
            <form className='add-item-form' onSubmit={(e) => itemAdd(e)}>
                <input type="text" placeholder='Grocery name' className='add-item-text' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                <input type="submit" style={{backgroundColor: 'black'}} className='btn' value='Add Item'/>
            </form>
        </div>
    )
}

export default AddItem
