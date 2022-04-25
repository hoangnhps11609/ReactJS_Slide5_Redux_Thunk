import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div id='m_menu' className='ui menu'>
          <Link to='/' className='item'>
              <i className="icon home"></i>Home
          </Link>
          <Link to='/song-add' className='item'>
              <i className="icon home"></i>Song Add
          </Link>
          <Link to='/song-list' className='item'>
              <i className="icon home"></i>Song List
          </Link>
          <Link to='/user-list' className='item'>
              <i className="icon home"></i>User List
          </Link>
          <Link to='/login' className='item'>
              <i className="icon home"></i>Login
          </Link>
      </div>
    )
  }
}

export default Header