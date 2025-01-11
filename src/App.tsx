import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technoligies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href={'#s'}>Home </a>
            <a href={'#s'}>News Feed </a>
            <a href={'#s'}>Messages </a>
        </div>
    )
}

const Technoligies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
