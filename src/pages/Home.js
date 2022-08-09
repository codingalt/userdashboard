import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { sidebarContext } from "../contexts/SidebarContext";
import { folderMenuContext } from "../contexts/FolderMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import bg from "../images/bg.png";
import UserSearchTop from "../components/UserSearchTop";
import ResultCard from "../components/ResultCard";
import SearchResultCard from "../components/SearchResultCard";
import SearchedStepsCard from "../components/SearchedStepsCard";
import SearchedStepsCheckedAll from "../components/SearchedStepsCheckedAll";
import AuditStepsCard from "../components/AuditStepsCard";

const Home = () => {
  const [active, setActive] = useState(true);
  const [openFolderMenu, setOpenFolderMenu] = useState(false);
  const [filterTray, setFilterTray] = useState(false);

  const handleFilterTray = () => {
    setFilterTray(!filterTray);
  };
  const toggleSidebar = () => {
    setActive(!active);
  };
  const handleMenu = () => {
    setOpenFolderMenu(true);
  };
  const closeMenu = () => {
    setOpenFolderMenu(false);
  };
  return (
    <sidebarContext.Provider value={{ isOpen: active, toggle: toggleSidebar }}>
      <folderMenuContext.Provider
        value={{
          openMenu: openFolderMenu,
          handleMenu,
          closeMenu,
          filterTray,
          handleFilterTray,
        }}
      >
        {/* Sidebar */}
        {<Sidebar />}

        {/* Main Content */}
        <main className={active ? "main" : "main main-reverse"}>
          {/* Navbar */}
          <Navbar />

          <div className="py-4 px-5">
            <span id="main-top-title" className="mt-2">
              User Actions
            </span>
          </div>

          {/* Content  */}
          <UserSearchTop />
          {/* Below are different Result Components. You can either create seperate pages or only change based on dynamic search query or according to the result  */}

          {/* <ResultCard /> */}
          {/* <SearchResultCard /> */}
          {/* <SearchedStepsCard /> */}
          <SearchedStepsCheckedAll />
          {/* <AuditStepsCard /> */}
        </main>
      </folderMenuContext.Provider>
    </sidebarContext.Provider>
  );
};

export default Home;
