import React from 'react';
import { Link } from 'react-router-dom'
import "./Navigation.css";

function Navigation() {
    return <div className="nav">
        <Link to="/">대기오염</Link>
        <Link to="/Forenoti">예보통보</Link>
        <Link to="/PmCity">시도별</Link>
    </div>
}

export default Navigation;