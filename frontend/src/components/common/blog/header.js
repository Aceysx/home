import React from 'react'
import { Icon } from 'antd'
import '../../../css/header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      collapsedIcon: this.state.collapsed ? 'menu-fold' : 'menu-unfold'
    }
  }
  render() {
    let header_style = {
      height: '400px',
      background: 'rgb(33, 150, 243,.95)'
    }
    let header_style_top = {
      position: 'fixed',
      height: '50px',
      width: '100%',
      top: 0,
      background: 'rgb(33, 150, 243)'
    }

    return <div style={header_style}>
      <div style={header_style_top}>
        <Icon className='header-icon header-icon-open' type={this.state.collapsedIcon} />
        <Icon className='header-icon header-icon-search' type="search" />
      </div>
    </div>
  }
}

export default Header
