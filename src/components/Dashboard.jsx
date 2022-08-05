import React, { useContext, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import * as bi from "react-icons/bi";
import { sidebarContext } from "../contexts/SidebarContext";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from '../images/bg.png'
import UserSearchTop from "./UserSearchTop";
import ResultCard from "./ResultCard";

const Dashboard = () => {
 
  const [active, setActive] = useState(true);
  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <>
      <sidebarContext.Provider
        value={{ isOpen: active, toggle: toggleSidebar }}
      >
        {/* Sidebar */}
        {<Sidebar />}

        {/* Main Content */}
        <main className={active ? "main" : "main main-reverse"}>
          {/* Navbar */}
          <Navbar />

          <div
            className=""
            style={
              active
                ? { padding: "1.6rem" }
                : { paddingLeft: "4rem", paddingTop: "1.8rem" }
            }
          >
            <span style={{color:'#737779'}} className="mt-2"> User Actions</span>
          </div>  

          {/* Content  */}
          <UserSearchTop />
          <ResultCard />

    
        </main>
        
      </sidebarContext.Provider>
    </>
  );
};

export default Dashboard;
