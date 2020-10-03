import React from 'react'
import amazonImg from '../../img/Amazon-btn.png';

const Purchase = () => {
  return (
    <div style={centerFlex}>
      <img src={amazonImg} style={amazonStyle} alt=''/>
    </div>
  )
}

const amazonStyle = {
  float: 'center',
  marginTop: '30px',
  width: '100px'
}

const centerFlex = {
  position: 'absolute',
  top: '66%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: '120px'
}

export default Purchase
