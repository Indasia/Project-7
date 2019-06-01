import React from 'react';
 
// 404 error when images can't be found
const NotFound = () => {
    return (
        <li className="notFound">
            <h3>Page Not Found</h3>
            <h1>There's nothing to see here people! Try searching for something else.</h1>
        </li>
    );
};

export default NotFound;