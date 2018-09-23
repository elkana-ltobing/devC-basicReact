import React from 'react';

const BlogList = (props) => {
    return (
        <div>
            <h1>{props.article.title}</h1>
            <p>{props.article.content}</p>
        </div>
    )
}

export default BlogList