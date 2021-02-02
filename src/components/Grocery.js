import { useState } from 'react'
import EditItem from './EditItem'

const Grocery = ({grocery, onDelete, onEdit, index}) => {
    const [editActive, setActive] = useState(false);

    const toggleEdit = () => {
        setActive(!editActive);
    }

    return (
        <div className='item'>
            <div className="grocery">

            <p>{grocery.name}</p>
            <div className="grocery-buttons">

            <p onClick={toggleEdit} className='edit-btn'>Edit</p>
            <button className='btn' onClick={() => onDelete(grocery.id)} style={{backgroundColor: 'red'}}>Delete</button>
            </div>
            </div>
            {editActive ? <EditItem onEdit={onEdit} grocery={grocery} index={index}/> : ''}

        </div>
    )
}

export default Grocery
