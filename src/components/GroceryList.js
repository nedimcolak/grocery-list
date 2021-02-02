import Grocery from './Grocery'

const GroceryList = ({groceries, onDelete, onEdit}) => {
    console.log(groceries)
    return (
        <>
            {groceries.length > 0 ? 
            groceries.map((grocery,index) => (
                <Grocery key={grocery.id} grocery={grocery} onDelete={onDelete} onEdit={onEdit} index={index}/>
            )) : <p style={{textAlign: 'center'}}>No items to show, add item with the input above!</p>
        }
        </>
    )
}

export default GroceryList
