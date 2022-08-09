import React, { createContext, useContext, useState } from "react";
import "../sass/navbar/navbar.css";
import { sidebarContext } from "../contexts/SidebarContext";
import { folderMenuContext } from "../contexts/FolderMenu";
import TopFolderMenu from "./TopFolderMenu";

const Navbar = () => {
  const { isOpen } = useContext(sidebarContext);
  const { openMenu, handleMenu } = useContext(folderMenuContext);

  return (
    <>
      <nav className={isOpen ? "navbar-menu pl-2" : "navbar-menu pl-4"}>
        {/* Left Section */}
        <div className="left">
          {/* <img src={logo} alt="" /> */}
          <h4 className="text-white my-auto">Website Logo</h4>
        </div>

        {/* Center Section */}
        <div className="right-container">
          <div className="center">
            <span onClick={handleMenu}>
              <i class="bi bi-folder-fill"></i>
            </span>
            {openMenu && <TopFolderMenu />}
            <span>
              <i class="bi bi-bell-fill"></i>
            </span>
            <span className="message">
              <i class="bi bi-person-fill"></i>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
