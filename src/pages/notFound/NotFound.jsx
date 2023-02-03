import React from 'react';
import './notFound.css';
import {Link} from 'react-router-dom';

const notFound = () => {
    return (
        <section>
            <div className="container notfound_container">
                <h2>Page Not Found</h2>
                <Link to="/" className="btn">Go Back Home</Link>
            </div>  
        </section>
)
}

export default notFound