import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center"></div>
        <img src={loading} alt="loading" />
        
      </div>
    )
  }
}

export default spinner
