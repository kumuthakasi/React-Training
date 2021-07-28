import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    StreamList
                </Link>
                <Link to="/streams/new" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    )
}

export default Header