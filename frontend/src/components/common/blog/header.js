import React from 'react'
import BackgroundImage from '../../../constant/images/bg.jpg'
import APPBar from '../app-bar'

const Header = (props) => {
  const bgStyle = {
    width: '100%',
    height: props.height || 50,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: '100%',
    marginBottom: 50
  }
  return <div style={bgStyle}>
    <APPBar />
    <div style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
      {props.title}
    </div>
  </div>
}

export default Header
