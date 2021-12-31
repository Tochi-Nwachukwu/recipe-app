import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <div className='footer'>
            <h1 className="mailing-list">Sign up to our Mailing list</h1>
             
            <input className='username-input' type="text"/>
            <input className='email-input' type="text"/>
            <button type='submit'>Sign up</button>
            <p>Copyright 2021 Tochi Nwachukwu</p>
        
        </div>
    )
}

export default footer;