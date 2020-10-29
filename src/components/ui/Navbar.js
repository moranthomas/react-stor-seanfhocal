import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {Device} from "./Device";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  margin: 10px;

  @media ${Device.laptop} {
    flex-direction: row;
    max-width: 1200px;
  }

  @media ${Device.desktop} {
    max-width: 2500px;
  }

  @media ${Device.mobileL} {
    max-width: 305px;
  }

`;


export default function Navbar() {
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
        </div>

    )
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
    textDecoration: 'none'
}

const linkStyle = {
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    marginRight: '20px'
}
