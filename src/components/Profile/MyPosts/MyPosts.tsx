import React from "react";
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>App post</button>
                <button>Remove</button>
            </div>
            <div className={'posts'}>
                <Post message={'Hi, how are you?'} like={15}/>
                <Post message={"It's my first post"} like={20}/>
            </div>
        </div>
    );
};