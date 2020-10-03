import React from 'react'
import logo from '../../img/front cover.png'
import amazonImg from '../../img/Amazon-btn.png';

const Purchase = () => {
  return (
    <div>
      <img src={amazonImg} style={amazonStyle} alt=''/>
    </div>
  )
}

const amazonStyle = {
  textAlign: 'right',
  marginTop: '30px',
  width: '120px'
}

export default Purchase
