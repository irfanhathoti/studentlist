import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='parent'>
            <Link className='home' to='home'>
            Home
            </Link>
            <Link className='student' to='studentlist'>Student List</Link>
            <Link className='contact' to='contact'>Contact Us</Link>
        </div>
    )
}
export default Header