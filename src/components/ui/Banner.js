import React from 'react'
import logo from '../../img/front cover.png'

const Banner = () => {
  return (
    <div>
      <header className='center'>
        <img src={logo} alt='' style={logoStyle} />
      </header>
    </div>
  )
}

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default Banner
