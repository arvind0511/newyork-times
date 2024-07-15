import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="magazine-header">
            <h1><Link to="/">NY Times Most Popular Articles</Link></h1>
        </div>
    )
}

export default Header