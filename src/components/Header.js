import React from 'react'
import icon from '../assets/grocery_icon.png'

const Header = () => {
    return (
        <header className='header'>
            <img alt="Groceries logo" src={icon}/>
            <h1>Grocery List</h1>
        </header>
    )
}

export default Header
