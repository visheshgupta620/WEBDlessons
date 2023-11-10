import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
        <nav className='navbar'>
            <div>
                <h1>QUOTES APP</h1>
            </div>
            <div>
                <a href="#">All QUOTES</a>
                <a href="#">New QUOTES</a>
            </div>
        </nav>
    </div>
  )
}

export default Navigation