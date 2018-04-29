import React from 'react'
import '../../../constant/css/layout.css'

export default class Layout extends React.Component {
  render () {
    return (
      <div >
        {this.props.children}
        <div className='foot'>
              © 2018 Acey
          </div>
      </div>
    )
  }
}
