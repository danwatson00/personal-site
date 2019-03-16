import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import initialsLogo from '../../images/logo-sm.png'
import longLogo from '../../images/logo-long.png'
import './Sidebar.css'

const Sidebar = ({ menu, logo }) =>
  <div className="sidebar">
    <div className="logo">
    <Link  to="/">
      <img className="initialsLogo" src={initialsLogo} alt={"Dan Watson Logo"}/>
    </Link>
    </div>
    <img src={longLogo} className="longLogo" alt="Dan Watson logo and description" />
    <MainNav />
  </div>

export default Sidebar;