import React from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left"><b>Argon Dashboard 2 Pro</b></div>
            <div className="navbar-middle">
                
                <div className="dropdown">
                    <span className="dropdown-text">Pages</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="white-svg-icon"
                    >
                        <path d="M12 15.41l4.29-4.29 1.41 1.41L12 18.23l-5.71-5.71 1.41-1.41z" />
                    </svg>
                </div>
                <div className="dropdown">
                    <span className="dropdown-text">Authantication</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="white-svg-icon"
                    >
                        <path d="M12 15.41l4.29-4.29 1.41 1.41L12 18.23l-5.71-5.71 1.41-1.41z" />
                    </svg>
                </div>
                <div className="dropdown">
                    <span className="dropdown-text">Applications</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="white-svg-icon"
                    >
                        <path d="M12 15.41l4.29-4.29 1.41 1.41L12 18.23l-5.71-5.71 1.41-1.41z" />
                    </svg>
                </div>
                <div className="dropdown">
                    <span className="dropdown-text">Docs</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="white-svg-icon"
                    >
                        <path d="M12 15.41l4.29-4.29 1.41 1.41L12 18.23l-5.71-5.71 1.41-1.41z" />
                    </svg>
                </div>
                <div className="dropdown">
                    <span className="dropdown-text">Ecommerce</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="white-svg-icon"
                    >
                        <path d="M12 15.41l4.29-4.29 1.41 1.41L12 18.23l-5.71-5.71 1.41-1.41z" />
                    </svg>
                </div>
                {/* Add more dropdowns here */}
            </div>
            <div className="navbar-right">
                <button className="buy-now-btn">Buy Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
