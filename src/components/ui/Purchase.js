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
  //marginTop: '30px',
  width: '150px'
}

const centerFlex = {
  position: 'relative',
  bottom: '-50px',
  left: '50%',
  transform: 'translate( -50%)',
  width: '120px'
}

export default Purchase
