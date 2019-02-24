import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import initialsLogo from '../../images/initials-logo.png'
import './Sidebar.css'

const Sidebar = ({ menu, logo }) =>
  <div className="sidebar">
    <Link to="/">
      <img className="initialsLogo" src={initialsLogo} alt={"Dan Watson Logo"}/>
    </Link>
    <MainNav />
  </div>

export default Sidebar;