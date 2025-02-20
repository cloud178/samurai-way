import React from 'react'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            {/*<img*/}
            {/*src={'https://clipart-library.com/images_k/superman-logo-transparent-background/superman-logo-transparent-background-5.png'}/>*/}
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" fill="none"/>
                <text x="5" y="45" font-family="Montserrat, Arial, sans-serif" font-size="36" font-weight="bold"
                      fill="black" letter-spacing="2">
                    S
                    <tspan dy="-5">N</tspan>
                </text>
            </svg>
        </header>
    );
};
