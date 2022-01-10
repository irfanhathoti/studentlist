import React from 'react'
import './Style.css'

export const Contact = () => {
    return (
        <div className='parent1'>
            <h2>Contact Us</h2>
            <div className='body'>
                <div className='whats'>
                    <i class="fab fa-whatsapp"></i>
                    <span className='number'>https://whatsapp chat</span>
                </div>
                <div className='insta'>
                <i class="fab fa-instagram"></i>
                <span className='text'> xyz_07_xyz</span>
                </div>
                <div className='cont'>
                <i class="far fa-address-book"></i>
                <span className='text'>1234567890</span>
                </div>
                <div className='email'>
                <i class="far fa-envelope"></i>
                <span className='text'>email@gmial.com</span>
                </div>
            </div>
        </div>
    )
}
