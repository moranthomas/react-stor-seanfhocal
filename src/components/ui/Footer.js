import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div style={footerStyle}>
            <br />
            <Link style={linkStyle} to="/"> Accelerant Labs | © 2020 </Link>
        </div>
    )
}

const footerStyle = {
    color: '#6495ED',
    textAlign: 'right',
    padding: '10px'
}

const linkStyle = {
    fontSize: '15px',
    color: '#fff',
    textDecoration: 'none',
}

const footerTextStyle = {
    fontSize: '40px',
    /*color: '#fff', */
    color: '#000',
    textDecoration: 'none'
}