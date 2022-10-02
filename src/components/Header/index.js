import React from 'react';

import './header.css';

export default function Header() {
    return <>
        <div className='header'>
            <div className='navContainer'>
                <div className='linkContainer'>
                    <p>Travaux récents</p>
                    <p>Compétences</p>
                    <p>A propos</p>

                </div>
                <div className='contactContainer'>
                    <p>Contact</p>
                </div>

            </div>
            <h1>
                    LAURE BARON
                </h1>
        </div>
    </>
}