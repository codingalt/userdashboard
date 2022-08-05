import React, { createContext,useContext,useState } from 'react'
import Profile from '../images/profile.jpg'
import * as bs from 'react-icons/bs'
import * as io from 'react-icons/io'
import * as fa from 'react-icons/fa'
import logo from '../images/logo.png';
import '../css/navbar.css'
import { sidebarContext } from '../contexts/SidebarContext'
import { folderMenuContext } from '../contexts/FolderMenu';
import TopFolderMenu from './TopFolderMenu'


const Navbar = () => {
    const {isOpen} = useContext(sidebarContext);
  const {openMenu,handleMenu} = useContext(folderMenuContext);
  
  return (
    <>
     <nav className='navbar-menu' style={isOpen ? {paddingLeft: '.8rem'} : {paddingLeft: '3rem'}}>
        {/* Left Section */}
        <div className="left">
            <img src={logo} style={{width:'100%'}} alt="" />
        </div>

        {/* Center Section */}
            <div className="right-container">
            <div className="center">
                <span onClick={handleMenu}><bs.BsFolderFill /> </span>
                {openMenu && <TopFolderMenu /> }
                <span><io.IoMdNotifications /></span>
                <span className='message'><fa.FaUser /></span>
            </div>

            </div>

     </nav>
    </>
  )
}

export default Navbar