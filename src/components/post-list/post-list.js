import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = () => {
    return(
        <ul className="app-list list-group">
            <PostListItem label="Going to learn react" important/>
            <PostListItem label="That is so good"/>
            <PostListItem label="I need a break..."/>
        </ul>    
    )
}

export default PostList;