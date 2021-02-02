import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header'
import GroceryList from './components/GroceryList'
import AddItem from './components/AddItem'

function App() {
  const [groceries, setGroceries] = useState('');
  
  useEffect(() => {
    localStorage.getItem('groceries') !== null && setGroceries(JSON.parse(localStorage.getItem('groceries')));
  }, [])
  

  const addItem = (item) => {
    console.log(item);
    const id = Math.floor(Math.random() * 1000);
    setGroceries([...groceries, {id: id, name: item}]);
  }

  const deleteItem = (id) => {
    setGroceries(groceries.filter((item) => (item.id !== id)));
    const storageUpdate = JSON.stringify(groceries);
    localStorage.setItem('groceries', storageUpdate);
  }

  const onEdit = (index, val) => {
    const temp = [...groceries];
    temp[index].name = val;
    setGroceries(temp);
  }

  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries))
  }, [groceries]);


  return (
    <div className="container">
      <Header />
      <AddItem onAdd={addItem}/>
      <GroceryList groceries={groceries} onDelete={deleteItem} onEdit={onEdit}/>
    </div>
  );
}

export default App;
