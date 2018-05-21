import React from 'react'
import { Icon, Menu, Layout } from 'antd'
const { Header, Sider, Content } = Layout;

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    let header_style_top = {
      height: '150px',
      width: '100%',
      marginTop: '50px',
      background: 'rgb(33, 150, 243)',
      textAlign: 'center'
    }
    let text = {
      fontSize:'14px',
      fontWeight: 'bold',
      lineHeight: '150px',
      color:'white',
      letterSpacing:'2px'

    }
    return <div style={header_style_top}>
      <span style={text}> Copyright © 2018 Acey</span>
    </div>
  }
}

export default Footer
