import React from 'react';
import { Link } from 'react-router-dom';
import amazonImg from '../../img/Amazon-btn.png';

export default function Header() {
    return (
        <div style={headerStyle}>
            <br />
            <p style={ headerTextStyle}>Stór Seanfhocal </p>
            <p>
                <Link style={linkStyle} to="/"> Home </Link>
                 <Link style={linkStyle} to="/about"> About  </Link>
                 <Link style={linkStyle} to="/about"> The Author </Link>
                 <Link style={linkStyle} to="/play"> Reviews </Link>
                 <Link style={linkStyle} to="/play"> Order Now </Link>
            </p>

            {/*<p><img src={amazonImg} style={amazonStyle} alt=''/> </p>*/}

        </div>
    )
}

const linkBoxStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    gridGap: '10px 2em'
}

const amazonStyle = {
    textAlign: 'center',
    marginTop: '30px',
    width: '120px'
}

const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const headerTextStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '50px',
    textAlign: 'center',
    color: '#f5d742',
    /*color: '#f5b942',*/
    textDecoration: 'none'
}

const linkStyle = {
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    marginRight: '20px'
}
