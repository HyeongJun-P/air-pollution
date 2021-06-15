import React from 'react';
import { Link } from 'react-router-dom'
import "./Navigation.css";

function Navigation() {
    return <div className="nav">
        <Link to="/">대기오염</Link>
        <Link to="/Fn">예보통보</Link>
    </div>
}

export default Navigation;