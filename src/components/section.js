import React, { Component } from 'react'

export default class Section extends Component {
  render() {
    return (
      <div className='section'>
        {this.props.children}
      </div>
    )
  }
}
