import React, { useState, useContext } from "react";
import "../sass/sidebar/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as io from "react-icons/io";
import * as bs from "react-icons/bs";
import footerLogo from "../images/footer_logo.png";
import { sidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [subMenu, setSubMenu] = useState(false);
  const { isOpen, toggle } = useContext(sidebarContext);

  return (
    <>
      <aside className={isOpen ? "sidebar" : "sidebar activeSidebar"}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          {isOpen ? (
            <bs.BsArrowLeft onClick={toggle} />
          ) : (
            <bs.BsArrowRight onClick={toggle} />
          )}
        </div>

        {/* Sidebar Links */}
        <div className="sidebar-menu">
          <div className="sidebar-links">
            <ul className={isOpen ? "sidebarul-12" : "sidebarul05"}>
              <li
                onClick={() => setActiveLink(1)}
                className={activeLink == 1 ? "active" : ""}
              >
                <a href="#" className={activeLink == 1 ? "white" : ""}>
                  <span className={activeLink == 1 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-grid-1x2-fill ml-0"
                          : "bi bi-grid-1x2-fill sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Dashboard</span>
                </a>
              </li>
              <li
                onClick={() => setActiveLink(2)}
                className={activeLink == 2 ? "active" : ""}
              >
                <a href="#" className={activeLink == 2 ? "white" : ""}>
                  <span className={activeLink == 2 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-list-columns ml-0"
                          : "bi bi-list-columns sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Processes</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setActiveLink(3);
                }}
                className={activeLink == 3 ? "active" : ""}
              >
                <a href="#" className={activeLink == 3 ? "white" : ""}>
                  <span className={activeLink == 3 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-collection-play ml-0"
                          : "bi bi-collection-play sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>
                    Executions
                  </span>
                </a>
              </li>
              <li
                onClick={() => {
                  setActiveLink(4);
                  setSubMenu(!subMenu);
                }}
                className={activeLink == 4 ? "active" : ""}
              >
                <a href="#" className={activeLink == 4 ? "white" : ""}>
                  <span className={activeLink == 4 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-list-stars ml-0"
                          : "bi bi-list-stars sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Events</span>
                </a>
                {isOpen && (
                  <p>
                    {subMenu ? (
                      <i class="bi bi-chevron-up"></i>
                    ) : (
                      <i class="bi bi-chevron-down"></i>
                    )}{" "}
                  </p>
                )}
              </li>

              {/* Sub Menu  */}
              {subMenu && (
                <ul className="sub-menu">
                  <li>User Actions</li>
                  <li>Events</li>
                </ul>
              )}

              <li
                onClick={() => setActiveLink(5)}
                className={activeLink == 5 ? "active" : ""}
              >
                <a href="#" className={activeLink == 5 ? "white" : ""}>
                  <span className={activeLink == 5 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-bar-chart-line-fill ml-0"
                          : "bi bi-bar-chart-line-fill sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>
                    Statistics
                  </span>
                </a>
                {isOpen && (
                  <p>
                    <i class="bi bi-chevron-down"></i>
                  </p>
                )}
              </li>
              <li
                onClick={() => setActiveLink(6)}
                className={activeLink == 6 ? "active" : ""}
              >
                <a href="#" className={activeLink == 6 ? "white" : ""}>
                  <span className={activeLink == 6 ? "white" : ""}>
                    <i
                      class={
                        isOpen
                          ? "bi bi-people-fill ml-0"
                          : "bi bi-people-fill sidebari-style"
                      }
                    ></i>
                  </span>
                  <span className={isOpen ? "" : "sidebar-txt"}>Users</span>
                </a>
                {isOpen && (
                  <p>
                    <i class="bi bi-chevron-down"></i>
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
