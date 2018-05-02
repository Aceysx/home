import React from 'react'
import { Icon, Menu, Layout } from 'antd'
import '../../../css/header.css'
const { Header, Sider, Content } = Layout;

class IndexHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      collapsedIcon: 'menu-unfold'
    }
  }
  render() {
    let header_style = {
      height: '400px',
      background: 'rgb(33, 150, 243,.95)',
      position: 'absoult',
      margin: '0 0 -12% 0'
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
        {this.props.isBack ?
          <Icon className='header-icon header-icon-open'
            type="arrow-left"
            onClick={() => window.history.back()} /> :
          <Icon className='header-icon header-icon-open'
            type={this.state.collapsedIcon}
            onClick={() => this.setState({
              collapsedIcon: this.state.collapsed ? 'menu-fold' : 'menu-unfold',
              collapsed: this.state.collapsed
            })} />
        }

        <Icon className='header-icon header-icon-search' type="search" />
      </div>
    </div>
  }
}

export default IndexHeader
