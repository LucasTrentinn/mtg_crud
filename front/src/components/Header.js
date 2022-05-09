import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark' style={{padding: "1em"}}>
            <div><a href='' className='navbar-brand'> Magic: The Gathering deck list </a></div>
          </nav>
        </header>
      </div>
    )
  }
}