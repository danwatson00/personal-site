import React from 'react'
import MainNav from '../MainNav/MainNav'
import initialsLogo from '../../images/initials-logo.png'
import './Sidebar.css'

const Sidebar = ({ menu, logo }) =>
  <div className="sidebar"> 
    <img className="initialsLogo" src={initialsLogo} alt={"Dan Watson Logo"}/>
    <MainNav />
  </div>

export default Sidebar;