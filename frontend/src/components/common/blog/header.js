import React from 'react'
import {Icon} from 'antd'
import '../../../css/layout/header.css'
import Information from '../information'

class IndexHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
      collapsedIcon: 'menu-unfold'
    }
  }
  render () {
    let header_style_top = {
      height: '50px',
      width: '100%',
      top: 0,
      background: 'rgb(33, 150, 243)'
    }

    return <div>
      <div style={header_style_top}>
        {this.props.isBack
          ? <Icon className='header-icon header-icon-open'
            type='arrow-left'
            onClick={() => window.history.back()} />
          : ''
          // <Icon className='header-icon header-icon-open'
          //   type={this.state.collapsedIcon}
          //   onClick={() => this.setState({
          //     collapsedIcon: this.state.collapsed ? 'menu-fold' : 'menu-unfold',
          //     collapsed: this.state.collapsed
          //   })} />
        }

        <Icon className='header-icon header-icon-search' type='search' />
      </div>
      <Information />
    </div>
  }
}

export default IndexHeader
