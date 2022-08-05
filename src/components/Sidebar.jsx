import React, { useState, useContext } from "react";
import Profile from "../images/profile.jpg";
import "../css/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bi from "react-icons/bi";
import * as ai from "react-icons/ai";
import * as si from "react-icons/si";
import * as io from "react-icons/io";
import * as ri from "react-icons/ri";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";
import processIcon from '../images/process_icon.png';
import liveIcon from '../images/live_icon.png';
import footerLogo from '../images/footer_logo.png';
import { sidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [subMenu,setSubMenu] = useState(false);
  const { isOpen,toggle } = useContext(sidebarContext);

  return (
    <>
      <aside
        className={isOpen ? "sidebar" : "sidebar activeSidebar"}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <bs.BsArrowLeft onClick={toggle} />
          </div>
      
        {/* Sidebar Links */}
        <div className="sidebar-menu">
          <div className="sidebar-links">
            <ul
              style={
                isOpen ? { paddingLeft: "1.2rem" } : { paddingLeft: ".5rem" }
              }
            >
              <li
                onClick={() => setActiveLink(1)}
                className={activeLink == 1 ? "active" : ""}
              >
                <a href="#" className={activeLink == 1 ? "white" : ""}>
                  <span className={activeLink == 1 ? "white" : ""}>
                    <md.MdSpaceDashboard
                      style={
                        isOpen
                          ? { marginLeft: "0px" }
                          : { marginLeft: "17px", fontSize: "30px" }
                      }
                    />
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Dashboard</span>
                </a>
              
              </li>
              <li
                onClick={() => setActiveLink(2)}
                className={activeLink == 2 ? "active" : ""}
              >
                <a href="#" className={activeLink == 2 ? "white" : ""}>
                  
                  <img src={processIcon} alt="" />
                  <span className={isOpen ? "" : "sidebar-txt"}>Processes</span>
                </a>
            
              </li>
              <li
                onClick={() => {setActiveLink(3);}}
                className={activeLink == 3 ? "active" : ""}
              >
                <a href="#" className={activeLink == 3 ? "white" : ""}>
               
                  <img src={liveIcon} alt="" />
                  <span className={isOpen ? "" : "sidebar-txt"}>Executions</span>
                </a>
            
              </li>
              <li
                onClick={() => {setActiveLink(4); setSubMenu(!subMenu);}}
                className={activeLink == 4 ? "active" : ""}
              >
                <a href="#" className={activeLink == 4 ? "white" : ""}>
                  <span className={activeLink == 4 ? "white" : ""}>
                    <ai.AiOutlineBars
                      style={
                        isOpen
                          ? { marginLeft: "0px" }
                          : { marginLeft: "17px", fontSize: "30px" }
                      }
                    />
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Events</span>
                </a>
                {isOpen && (
                  <p>
                    {subMenu ? <io.IoIosArrowUp /> : <io.IoIosArrowDown />}
                    {" "}
                  </p>
                )}
              </li>

              {/* Sub Menu  */}
              {subMenu &&
              <ul className="sub-menu">
                <li>User Actions</li>
                <li>Events</li>
              </ul>
              }

              <li
                onClick={() => setActiveLink(5)}
                className={activeLink == 5 ? "active" : ""}
              >
                <a href="#" className={activeLink == 5 ? "white" : ""}>
                  <span className={activeLink == 5 ? "white" : ""}>
                    <si.SiGoogleanalytics
                      style={
                        isOpen
                          ? { marginLeft: "0px" }
                          : { marginLeft: "17px", fontSize: "30px" }
                      }
                    />
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Statistics</span>
                </a>
                {isOpen && (
                  <p>
                    <io.IoIosArrowDown />{" "}
                  </p>
                )}
              </li>
              <li
                onClick={() => setActiveLink(6)}
                className={activeLink == 6 ? "active" : ""}
              >
                <a href="#" className={activeLink == 6 ? "white" : ""}>
                  <span className={activeLink == 6 ? "white" : ""}>
                    <ai.AiOutlineUsergroupAdd
                      style={
                        isOpen
                          ? { marginLeft: "0px" }
                          : { marginLeft: "17px", fontSize: "30px" }
                      }
                    />
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Users</span>
                </a>
                {isOpen && (
                  <p>
                    <io.IoIosArrowDown />{" "}
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
       

<div className="sidebar-footer">
        <img src={footerLogo} alt="" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
