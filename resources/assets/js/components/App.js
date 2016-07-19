import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1><Link to="/">Laravel + React example app</Link></h1>
        <h3><Link to="/date">date</Link></h3>

        <ul>
          <li><Link to="/posts">Posts</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }

}

export default App
