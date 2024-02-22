import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Navbar.css'
const Navbar = () => {
    return (
        <div>
            {/* Main navbar for Header */}
            <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body">
                <div class="container">
                    <Link class="navbar-brand" to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                        </svg>
                        <h4 className='nav-title d-inline block'>Data Center</h4></Link>
                </div>
            </nav>
            {/*  Navbar for home and userComponents */}
            <nav class="second navbar navbar-expand-lg bg-success border-bottom border-body">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                        </li> 
                        <li class="nav-item">
                            <Link class="nav-link" to="/users">Foods</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;