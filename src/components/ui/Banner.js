import React from 'react'
import logo from '../../img/front cover.png'
import amazonImg from '../../img/Amazon-btn.png';

const Banner = () => {
  return (
    <div>
      <header className='center'>
        <img src={logo} alt='' />
      </header>
      <p><img src={amazonImg} style={amazonStyle} alt=''/> </p>
    </div>
  )
}

const amazonStyle = {
  textAlign: 'right',
  marginTop: '30px',
  width: '120px'
}

export default Banner
