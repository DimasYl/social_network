import React from 'react'
import Post from "./Post";

export default {
    title: 'Post',
    component: 'Post'
}

export const PostStory = () => <Post likesCount={12} message={'Prikol'} />