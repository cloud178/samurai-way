import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src={'https://clipart-library.com/images_k/superman-logo-transparent-background/superman-logo-transparent-background-5.png'}/>
            </header>
            <nav className='nav'>
                <div>
                    <a href={'#'}>Profile</a>
                </div>
                <div>
                    <a href={'#'}>Messages</a>
                </div>
                <div>
                    <a href={'#'}>News</a>
                </div>
                <div>
                    <a href={'#'}>Music</a>
                </div>
                <div>
                    <a href={'#'}>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt={'main img'}
                    />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
