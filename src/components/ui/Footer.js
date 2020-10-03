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
    marginTop: '20px',
    padding: '10px'
}

const linkStyle = {
    fontSize: '15px',
    color: 'grey',
    textDecoration: 'none',
}

const footerTextStyle = {
    fontSize: '40px',
    /*color: '#fff', */
    color: '#9042f5',
    textDecoration: 'none'
}