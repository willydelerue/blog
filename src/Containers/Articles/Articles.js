import React from 'react';
import { Link } from 'react-router-dom';

function Articles() {
    return (
        <>
        <h1>Articles</h1>;
        <Link to="/contact" style={{marginRight: '10px'}}>Contact</Link>
        </>
    )
}

export default Articles;