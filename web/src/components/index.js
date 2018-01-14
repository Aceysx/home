import React from 'react'
import {withRouter} from 'react-router-dom'
import BackgroundImage from '../constant/images/bg.jpg'
import MenuButtons from '../components/common/menu-buttons'
import APPBar from './common/app-bar'

class Index extends React.Component {
  render () {
    const bgStyle = {
      width: '100%',
      height: window.innerHeight,
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: '100%'
    }
    const menuStyle = {
      margin: '20% 30%',
      position: 'absolute'
    }
    return (
      <div>
        <div style={bgStyle} >
          <APPBar />
          <div style={menuStyle}>
            <MenuButtons />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Index)
